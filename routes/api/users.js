const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const giveMeData = require ('../../puppeteer_Data/Puppeteer.js');
const giveMePDF = require ('../../puppeteer_Data/GeneratePDF.js');

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
        console.log(datas)
        
        res.status(200).send(datas);
    } catch (e) {
        next(e);
    }
};
router.get("/data/:profile", sendData)

// Generate PDF
const sendPDFData = async (req, res, next) => {
    try {
        //const datas = await giveMeData(`https://www.linkedin.com/in/${req.params.profile}`);
        const datas = await giveMePDF();
        console.log(datas)
        
        res.status(200).send(datas);
    } catch (e) {
        next(e);
    }
};
router.get("/data/pdf/:id", sendPDFData)
/////////////////////////////////////////////////////

const saveCVtoServer = (req, res, next)  => {
    console.log(req.params.id)
   // console.log(req.body)
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
    "cv.$.color": req.body.color,
    "cv.$.font": req.body.font,
    "cv.$.size1": req.body.size1,
    "cv.$.size2": req.body.size2,
    "cv.$.size3": req.body.size3,
    "cv.$.size4": req.body.size4,
    "cv.$.tasksHistory": req.body.tasksHistory,
    "cv.$.tasksOutput": req.body.tasksOutput,
    "cv.$.value": req.body.value
}}, function(err, success){
        if(success){
            console.log("i updated the obj!!")

        }else {
            console.log(err)
        }
    })
}
else{
        User.findOneAndUpdate(
        { _id: req.params.id }, 
        { $push: { cv: req.body } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log("New CV Created!!!!")
             }
         });
}
                }
            }
        );   
     
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
module.exports = router;

