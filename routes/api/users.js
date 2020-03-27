const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const giveMeData = require("../../puppeteer_Data/Puppeteer.js");
const giveMePDF = require("../../puppeteer_Data/GeneratePDF.js");
const giveMePDFCover = require("../../puppeteer_Data/GeneratePDF_Cover.js");
const giveMeJobData = require("../../puppeteer_Data/StepStoneData");
const giveMeScreenShot = require("../../puppeteer_Data/GenerateSreenShot");
const giveMeScreenShotCover = require("../../puppeteer_Data/GenerateSreenShotCover");
const fs = require("fs");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body); // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }); // Hash password before saving in database
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

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body); // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password; // Find user by email
  User.findOne({
    email
  }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({
        emailnotfound: "Email not found"
      });
    } // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }; // Sign token
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
        return res.status(400).json({
          passwordincorrect: "Password incorrect"
        });
      }
    });
  });
});

//ROUTE  TO GET LINKEDIN USER DATA

// THE PUPPETEER FUNCTION THAT GET THE LINKEDIN DATA
const sendData = async (req, res, next) => {
  try {
    console.log(req.params.id)
    // const datas = await giveMeData(
    //   `https://www.linkedin.com/in/${req.params.profile}`
    // );
    //const datas = await giveMePDF();
    console.log(req.params.profile);

    res.status(200).send(datas);
  } catch (e) {
    next(e);
    res.status(404).send("something went wrong");
  }
};
router.get("/data/link/:profile", sendData);

// Generate PDF Cover
const sendPDFDataCover = async (req, res, next) => {
  try {
    console.log(req.params.id)
    //const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
    const datas = await giveMePDFCover(req.params.id);
    //const file = await `${__dirname}../../../profile_picture/${req.params.id}.pdf`;
    res.status(200).send(datas);
    // fs.unlink(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`, (err) => {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }})
    //
    // setTimeout(function(){ fs.unlinkSync(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`) }, 5000);
    // fs.unlinkSync(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`)
    //res.status(200).sendFile(/profile_picture/combinedNew.pdf)
  } catch (e) {
    next(e);
  }
};
router.get("/data/pdf/cover/:id", sendPDFDataCover);


// Generate PDF COver
const sendPDFData = async (req, res, next) => {
  try {
    //const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
    const datas = await giveMePDF(req.params.id);
    //const file = await `${__dirname}../../../profile_picture/${req.params.id}.pdf`;
    res.status(200).send(datas);
    // fs.unlink(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`, (err) => {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }})
    //
    // setTimeout(function(){ fs.unlinkSync(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`) }, 5000);
    // fs.unlinkSync(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${req.params.id}.pdf`)
    //res.status(200).sendFile(/profile_picture/combinedNew.pdf)
  } catch (e) {
    next(e);
  }
};
router.get("/data/pdf/:id", sendPDFData);
/////////////////////////////////////////////////////
// SAVE CV TO SERVER ROUTE

const saveCVtoServer = async (req, res, next) => {
  if (!req.params.id.includes("-")) {
    
    console.log("user id -" + req.params.id);
    console.log("cv id -" + req.body.id);
    console.log("its updating");
    //User.findOne({"cv.id$": parseInt(req.body.id)}, function(success){ if(success){console.log(true)}else{console.log(false)}})
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
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { cv: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
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
    //  giveMeScreenShot(req.body.id)
  } else {
  }
};

router.post("/resume/cv/save/:id", saveCVtoServer);
// SAVE COVER LETTER TO SERVER

const saveCoverLettertoServer = async (req, res, next) => {
  if (!req.params.id.includes("-")) {
console.log("user id -" + req.params.id);
 console.log("cv id -" + req.body.id);
    console.log("its updating");
    //User.findOne({"cv.id$": parseInt(req.body.id)}, function(success){ if(success){console.log(true)}else{console.log(false)}})
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
            User.findOneAndUpdate(
              { _id: req.params.id },
              { $push: { coverLetters: req.body } },
              async function(error, success) {
                if (error) {
                  console.log(error);
                } else {
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
    //  giveMeScreenShot(req.body.id)
  } else {
     }
};

router.post("/resume/cover/save/:id", saveCoverLettertoServer);

// RETRIEVE A SPECIFIC CV FROM SERVER
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
router.get("/resume/cv/currentCV/:id", getCVFromServer);

// RETRIEVE A SPECIFIC COVER LETTER FROM SERVER
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
router.get("/resume/cv/currentCover/:id", getCoverLetterFromServer);
// DELETE CV FROM SERVER 
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
router.post("/resume/cv/delete/:id1/:id2", deleteCVFromServer);

// DELETE SPECIFIC COVER LETTER FROM SERVER 
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

// DUPLICATE A CV ON SERVER
let statusDuplicate = false
const duplicateCVFromServer = async(req, res, next) => {
  if(statusDuplicate === false){
     statusDuplicate = true
  if (!req.params.id.includes("-")) {
    //User.findOne({"cv.id$": parseInt(req.body.id)}, function(success){ if(success){console.log(true)}else{console.log(false)}})
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
    //  giveMeScreenShot(req.body.id)
  } else {
  }
}

};
router.post("/resume/cv/duplicate/:id", duplicateCVFromServer);

// DUPLICATE A COVER LETTER ON SERVER

const duplicateCoverLetterFromServer = async(req, res, next) => {
  if(statusDuplicate === false){
    statusDuplicate = true
  if (!req.params.id.includes("-")) {
    //User.findOne({"cv.id$": parseInt(req.body.id)}, function(success){ if(success){console.log(true)}else{console.log(false)}})
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
    //  giveMeScreenShot(req.body.id)
  } else {
  }
}
};
router.post("/resume/cover/duplicateCover/:id", duplicateCoverLetterFromServer);

// RETRIEVE ALL CVS FROM SERVER
const getALLCVFromServer = (req, res, next) => {
  User.findOne({ _id: req.params.id }, function(err, success) {
    if (err) {
      console.log(err);
    } else if (success) {
      res.send(success.cv);
    }
  });
};
router.get("/resume/cv/allCV/:id", getALLCVFromServer);

// RETRIEVE ALL COVER LETTERS FROM SERVER
const getALLCoverLettersFromServer = (req, res, next) => {
  User.findOne({ _id: req.params.id }, function(err, success) {
    if (err) {
      console.log(err);
    } else if (success) {
      res.send(success.coverLetters);
    }
  });
};
router.get("/resume/cover/allCovers/:id", getALLCoverLettersFromServer);
let status = false
// StepStoneData
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
    //const datas = await giveMePDF();
    console.log("stepStone is calling");

    await res.status(200).send(datas);
    status = false
    }
  } catch (e) {
    next(e);
    res.status(404).send("something went wrong");
  }
};
router.get(
  "/data/stepstone/position/:position/location/:location/pages/:pages",
  sendStepStoneData
);
module.exports = router;
