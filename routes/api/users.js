const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const giveMeData = require ('../../puppeteer_Data/Puppeteer.js');
const giveMePDF = require ('../../puppeteer_Data/GeneratePDF.js');
const giveStepStoneData = require ('../../puppeteer_Data/StepStoneData');
const giveMeScreenShot = require ('../../puppeteer_Data/GenerateSreenShot');
const fs = require('fs')

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login"); // Load User model
const User = require("../../models/User");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation 
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body); // Check validation
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
    const {
        errors,
        isValid
    } = validateLoginInput(req.body); // Check validation
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
                    name: user.name
                }; // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey, {
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
                return res
                    .status(400)
                    .json({
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
        const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
        //const datas = await giveMePDF();
        console.log(req.params.profile)
        
        res.status(200).send(datas);
    } catch (e) {
        next(e);
        res.status(404).send("something went wrong")
    }
};
router.get("/data/link/:profile", sendData)

// Generate PDF
const sendPDFData = async (req, res, next) => {
    try {
        //const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
        const datas = await giveMePDF(req.params.id);
        //const file = await `${__dirname}../../../profile_picture/${req.params.id}.pdf`;
         res.status(200).send(datas)
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
router.get("/data/pdf/:id", sendPDFData)
/////////////////////////////////////////////////////

const saveCVtoServer = (req, res, next)  => {
    if(!(req.params.id).includes("-")){
    console.log("user id -" + req.params.id)
   console.log("cv id -" +req.body.id)
    console.log("its updating")
    //User.findOne({"cv.id$": parseInt(req.body.id)}, function(success){ if(success){console.log(true)}else{console.log(false)}})
        User.findOne(
            { "cv.id": req.body.id }, 
            { 
                "cv": {
                    "$elemMatch": {
                        "id": req.body.id
                    }
                }
            },
            function (err, success) {
                if (err){
                    console.log(err)}
                else {
if(success){
    console.log("This is the obj+++++++++"+ success)
    User.updateOne({"_id": req.params.id, "cv.id": req.body.id}, 
    {$set: {"cv.$.userData": req.body.userData,
    "cv.$.style": req.body.style
}}, function(err, success){
        if(success){
            console.log("i updated the obj!!")
            giveMeScreenShot(req.body.id)

        }else {
            console.log(err)
        }
    })
}
if(!success){
        User.findOneAndUpdate(
        { _id: req.params.id }, 
        { $push: { cv: req.body } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log("New CV Created!!!!")
                 giveMeScreenShot(req.body.id)
             }
         });
}
                }
            }
        );   
    //  giveMeScreenShot(req.body.id)
        }
        else{}
}

router.post("/resume/cv/:id" , saveCVtoServer)

const getCVFromServer = (req, res, next) => {
    User.findOne(
        { "cv.id": req.params.id }, 
        { 
            "cv": {
                "$elemMatch": {
                    "id": req.params.id
                }
            }
        },
        function (err, success) {
            if (err){
                console.log(err)}
            else if(success) {
                res.send(success)
            }
        }
    )}
    router.get("/resume/cv/currentCV/:id" , getCVFromServer)


const getALLCVFromServer = (req, res, next) => {
    User.findOne(
        { "_id": req.params.id }, 
        function (err, success) {
            if (err){
                console.log(err)}
            else if(success) {
                res.send(success.cv)
            }
        }
    )}
    router.get("/resume/cv/allCV/:id" , getALLCVFromServer)
// StepStoneData
    const sendStepStoneData = async (req, res, next) => {
        try {
            const datas = await giveStepStoneData(req.params.position, req.params.location);
            //const datas = await giveMePDF();
            console.log(datas)
            
            res.status(200).send(datas);
        } catch (e) {
            next(e);
            res.status(404).send("something went wrong")
        }
    };
    router.get("/data/stepstone/position/:position/location/:location", sendStepStoneData)
module.exports = router;

