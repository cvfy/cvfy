// IMPORTED PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

// IMPORT USERS ROUTE
const users = require("./routes/api/users");

// INITIALIZE EXPRESS
const app = express();


// SETTING STATIC SHARED FOLDERS
app.use("/static", express.static("profile_picture"));
app.use("/static2", express.static("puppeteer_Data/profile_picture"));


//BODY PARSER MIDDLEWARE
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//ADDING CORS
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

//DATABASE CONFIG
const db = require("./config//keys").mongoURI;

//CONNECT TO MongoDB
mongoose.set("useFindAndModify", false);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfull!"))
  .catch(err => console.log(err));

// PASSPORT MIDDLEWARE
app.use(passport.initialize()); // Passport config
require("./config/passport")(passport); // Routes

// MAIN ROUTE PATH
app.use("/api/users", users);

// SETTING SERVER PORT
const port = process.env.PORT || 5000;

// SETTING LISTENER FOR SERVER PORT 
app.listen(port, () =>
  console.log(`Server up and successfully running on port ${port} !`)
);
