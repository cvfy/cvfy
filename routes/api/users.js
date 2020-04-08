
// IMPORTED PACKAGES
// IMPORT EXPRESS ROUTER
const express = require("express");
const router = express.Router();
// PACKAGE FOR PASSWORD HASHING
const bcrypt = require("bcryptjs");
// JASON WEB TOKEN STRATEGY
const jwt = require("jsonwebtoken");
// IMPORT KEYS
const keys = require("../../config/keys");
// IMPORT MIDDLEWARE FUNCTIONS
const giveMeData = require("../../puppeteer_Data/Puppeteer.js");
const giveMePDF = require("../../puppeteer_Data/GeneratePDF.js");
const giveMePDFCover = require("../../puppeteer_Data/GeneratePDF_Cover.js");
const giveMeJobData = require("../../puppeteer_Data/StepStoneData");
const giveMeScreenShot = require("../../puppeteer_Data/GenerateSreenShot");
const giveMeScreenShotCover = require("../../puppeteer_Data/GenerateSreenShotCover");

// IMPORT VALIDATION FUNCTIONS FOR REGISTER AND LOGIN ROUTE
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); 

// LOAD USER MODEL
const User = require("../../models/User");
// #############################################################################################################################
// @route POST api/users/register (PUBLIC ROUTE, REGISTER NEW USER)
router.post("/register", (req, res) => {

// FORM VALIDATION
  const { errors, isValid } = validateRegisterInput(req.body); // VALIDATION RESULTS DESTRUCTURED
  if (!isValid) {
    return res.status(400).json(errors);
  }

// CHECK DATABASE IF EMAIL ALREADY EXISTS
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {

// SAVE NEW USER
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }); 

// HASH PASSSWORD BEFORE SAVING TO DATABASE
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
// #############################################################################################################################

// @route POST api/users/login ( PUBLIC LOGIN USER ROUTE AND RETURN JWT TOKEN)
router.post("/login", (req, res) => {

// FORM VALIDATION
  const { errors, isValid } = validateLoginInput(req.body); // VALIDATION RESULTS DESTRUCTURED
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password; 
// FIND USER BY EMAIL
  User.findOne({
    email
  }).then(user => {
// CHECK IF THE USER EXISTS
    if (!user) {
      return res.status(404).json({
        emailnotfound: "Email not found"
      });
    } 
// CHECK IF PASSWORD IS CORRECT
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {

// IF USER MATCHED
// CREATE JWT PAYLOAD
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }; 

// SIGN TOKEN
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {

// IF PASSWORD DID NOT MATCH
        return res.status(400).json({
          passwordincorrect: "Password incorrect"
        });
      }
    });
  });
});

// #############################################################################################################################

// ROUTE TO GET LINKEDIN USER DATA USING PUPPETEER
// MIDDLEWARE FUNCTION
const sendData = async (req, res, next) => {
  try {
    console.log(req.params.id)
    const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
    console.log(req.params.profile);
    res.status(200).send(datas);
  } catch (e) {
    next(e);
    res.status(404).send("something went wrong");
  }
};
// ROUTE PATH

router.get("/data/link/:profile", sendData);
// #############################################################################################################################

// ROUTE TO GENERATE PDF VERSION OF CURRENT SAVED COVER LETTER USING PUPPETEER
// MIDDLEWARE FUNCTION
const sendPDFDataCover = async (req, res, next) => {
  try {
    const datas = await giveMePDFCover(req.params.id);
    res.status(200).send(datas);
  } catch (e) {
    next(e);
  }
};

// ROUTE PATH
router.get("/data/pdf/cover/:id", sendPDFDataCover);
// #############################################################################################################################

// ROUTE TO GENERATE PDF VERSION OF CURRENT SAVED COVER LETTER USING PUPPETEER
// MIDDLEWARE FUNCTION
const sendPDFData = async (req, res, next) => {
  try {
    const datas = await giveMePDF(req.params.id);
    res.status(200).send(datas);
  } catch (e) {
    next(e);
  }
};

// ROUTE PATH
router.get("/data/pdf/:id", sendPDFData);
// #############################################################################################################################

// ROUTE TO SAVE CURRENT CV TO DATABASE
// MIDDLEWARE FUNCTION
const saveCVtoServer = async (req, res, next) => {
  if (!req.params.id.includes("-")) {
    console.log("user id -" + req.params.id);
    console.log("cv id -" + req.body.id);
    console.log("its updating");
// FIND CV BY ID
    await User.findOne(
      { "cv.id": req.body.id },
      {
        cv: {
          $elemMatch: {
            id: req.body.id
          }
        }
      },
      function(err, success) {
        if (err) {
          console.log(err);
        } else {
// IF CV WITH THIS ID FOUND IN DATABASE UPDATE IT
          if (success) {
            console.log("This is the obj+++++++++" + success);
            User.updateOne(
              { _id: req.params.id, "cv.id": req.body.id },
              {
                $set: {
                  "cv.$.userData": req.body.userData,
                  "cv.$.style": req.body.style,
                  "cv.$.loadingSaveCv": req.body.loadingSaveCv,
                  "cv.$.importing": req.body.importing
                }
              },
              async function(err, success) {
// WHEN CV IS ALREADY SAVED TO DATABASE GENERATE SCREENSHOT OF THIS CV FOR MY DOCUMENTS PAGE
                if (success) {
                  giveMeScreenShot(req.body.id);
                  console.log("i updated the obj!!");
                  res.send("done");
                } else {
                  console.log(err);
                }
              }
            );
          }
          if (!success) {
// IF THERE IS NO CV WITH THIS ID IN DATABASE, SAVE THE CV AS NEW CV
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { cv: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
// WHEN NEW CV SAVED IN DATABASE GENERATE SCREENSHOT FOR MY DOCUMENTS PAGE
                  giveMeScreenShot(req.body.id);
                  console.log("New CV Created!!!!");
                  res.send("done");
                }
              }
            );
          }
        }
      }
    );
  } else {
  }
};

// ROUTE PATH
router.post("/resume/cv/save/:id", saveCVtoServer);
// #############################################################################################################################

// ROUTE TO SAVE CURRENT COVER LETTER TO DATABASE
// MIDDLEWARE FUNCTION
const saveCoverLettertoServer = async (req, res, next) => {
  if (!req.params.id.includes("-")) {
console.log("user id -" + req.params.id);
 console.log("cv id -" + req.body.id);
    console.log("its updating");
// FIND COVER LETTER BY ID
    await User.findOne(
      { "coverLetters.id": req.body.id },
      {
        coverLetters: {
          $elemMatch: {
            id: req.body.id
          }
        }
      },
      function(err, success) {
        if (err) {
          console.log(err);
        } else {
          if (success) {
// IF COVER LETTER WITH THIS ID FOUND IN DATABASE UPDATE IT
            console.log("This is the obj+++++++++" + success);
            User.updateOne(
              { _id: req.params.id, "coverLetters.id": req.body.id },
              {
                $set: {
                  "coverLetters.$.style": req.body.style,
                  "coverLetters.$.loadingSaveCv": req.body.loadingSaveCv,
                  "coverLetters.$.coverLetters": req.body.coverLetters
                }
              },
              async function(err, success) {
// WHEN COVER LETTER IS ALREADY SAVED TO DATABASE GENERATE SCREENSHOT OF THIS CV FOR MY DOCUMENTS PAGE
                if (success) {
                  giveMeScreenShotCover(req.body.id);
                  console.log("i updated the Cover Letter!!");
                  res.send("done");
                } else {
                  console.log(err);
                }
              }
            );
          }
          if (!success) {
// IF THERE IS NO COVER LETTER WITH THIS ID IN DATABASE, SAVE THE CV AS NEW CV
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { coverLetters: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
// WHEN NEW COVER LETTER SAVED IN DATABASE GENERATE SCREENSHOT FOR MY DOCUMENTS PAGE
                  giveMeScreenShotCover(req.body.id);
                  console.log("New CoverLetter Created!!!!");
                  res.send("done");
                }
              }
            );
          }
        }
      }
    );
  } else {
     }
};
// ROUTE PATH
router.post("/resume/cover/save/:id", saveCoverLettertoServer);
// #############################################################################################################################

// ROUTE TO RETRIEVE A SPECIFIC CV FROM DATABASE
// MIDDLEWARE FUNCTION
const getCVFromServer = (req, res, next) => {
  User.findOne(
    { "cv.id": req.params.id },
    {
      cv: {
        $elemMatch: {
          id: req.params.id
        }
      }
    },
    function(err, success) {
      if (err) {
        console.log(err);
      } else if (success) {
        res.send(success);
      }
    }
  );
};

// ROUTE PATH
router.get("/resume/cv/currentCV/:id", getCVFromServer);
// #############################################################################################################################

// ROUTE TO RETRIEVE A SPECIFIC COVER LETTER FROM DATABASE
// MIDDLEWARE FUNCTION
const getCoverLetterFromServer = (req, res, next) => {
  User.findOne(
    { "coverLetters.id": req.params.id },
    {
      coverLetters: {
        $elemMatch: {
          id: req.params.id
        }
      }
    },
    function(err, success) {
      if (err) {
        console.log(err);
      } else if (success) {
        res.send(success);
      }
    }
  );
};

// ROUTE PATH
router.get("/resume/cv/currentCover/:id", getCoverLetterFromServer);
// #############################################################################################################################

// DELETE A SPECIFIC CV FROM DATABASE
// MIDDLEWARE FUNCTION
const deleteCVFromServer = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id1, { $pull: { "cv": { id: req.params.id2 } } }, { safe: true, upsert: true },
    function(err, success) {
      if (err) {
        console.log(err);
      } else if (success) {
        // console.log(success.cv.map(el => el.id))
        res.send(success.cv.filter(el => el.id !== req.params.id2));
      }
    }
  );
};

// ROUTE PATH
router.post("/resume/cv/delete/:id1/:id2", deleteCVFromServer);
// #############################################################################################################################


// DELETE A SPECIFIC COVER LETTER FROM DATABASE 
// MIDDLEWARE FUNCTION
const deleteCoverLetterFromServer = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id1, { $pull: { "coverLetters": { id: req.params.id2 } } }, { safe: true, upsert: true },
    
    function(err, success) {
      if (err) {
        console.log(err);
      } else if (success) {
        // console.log(success.coverLetters.filter(el => el.id !== req.params.id2))
        res.send(success.coverLetters.filter(el => el.id !== req.params.id2));
      }
    }
  );
};
router.post("/resume/cover/deleteCover/:id1/:id2", deleteCoverLetterFromServer);
// #############################################################################################################################


// DUPLICATE A SPECIFIC CV IN DATABASE
// MIDDLEWARE FUNCTION
let statusDuplicate = false
const duplicateCVFromServer = async(req, res, next) => {
  if(statusDuplicate === false){
     statusDuplicate = true
  if (!req.params.id.includes("-")) {
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { cv: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
                  await giveMeScreenShot(req.body.id);
                  console.log("New CV Created!!!!");
                  res.send([...success.cv, req.body]);
                }
              }
            );
   statusDuplicate = false
  } else {
  }
}
};

// ROUTE PATH
router.post("/resume/cv/duplicate/:id", duplicateCVFromServer);
// #############################################################################################################################

// DUPLICATE A SPECIFIC COVER LETTER IN DATABASE
// MIDDLEWARE FUNCTION
const duplicateCoverLetterFromServer = async(req, res, next) => {
  if(statusDuplicate === false){
    statusDuplicate = true
  if (!req.params.id.includes("-")) {
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { coverLetters: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
                  await giveMeScreenShotCover(req.body.id);
                  console.log("New CV Created!!!!");
                  res.send([...success.coverLetters, req.body ]);
                }
              }
            );
   statusDuplicate = false
  } else {
  }
}
};

// ROUTE PATH
router.post("/resume/cover/duplicateCover/:id", duplicateCoverLetterFromServer);
// #############################################################################################################################


// RETRIEVE ALL CV'S OF A USER FROM DATABASE
// MIDDLEWARE FUNCTION
const getALLCVFromServer = (req, res, next) => {
  User.findOne({ _id: req.params.id }, function(err, success) {
    if (err) {
      console.log(err);
    } else if (success) {
      res.send(success.cv);
    }
  });
};

// ROUTE PATH
router.get("/resume/cv/allCV/:id", getALLCVFromServer);
// #############################################################################################################################

// RETRIEVE ALL COVER LETTERS OF A USER FROM DATABASE
// MIDDLEWARE FUNCTION
const getALLCoverLettersFromServer = (req, res, next) => {
  User.findOne({ _id: req.params.id }, function(err, success) {
    if (err) {
      console.log(err);
    } else if (success) {
      res.send(success.coverLetters);
    }
  });
};

// ROUTE PATH
router.get("/resume/cover/allCovers/:id", getALLCoverLettersFromServer);
// #############################################################################################################################

// ROUTE TO RETRIEVE JOB ADS DATA REQUIRED FOR JOB DASHBOARD DONE WITH PUPPETEER SCRAPING
// MIDDLEWARE FUNCTION
let status = false
const sendStepStoneData = async (req, res, next) => {
  try {
    if(status === false){
      status = true
      console.log(req.params)
    const datas = await giveMeJobData(
      req.params.position,
      req.params.location,
      req.params.pages
    );
    console.log("stepStone is calling");

    await res.status(200).send(datas);
    status = false
    }
  } catch (e) {
    next(e);
    res.status(404).send("something went wrong");
  }
};

// ROUTE PATH
router.get(
  "/data/stepstone/position/:position/location/:location/pages/:pages",
  sendStepStoneData
);
// #############################################################################################################################
// EXPORT USERS ROUTES
module.exports = router;
