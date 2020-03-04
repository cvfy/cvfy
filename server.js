const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const cors = require('cors')

const users = require("./routes/api/users")

const app = express();
//Bodyparser middleware

app.use('/static', express.static('profile_picture'))
app.use( 
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
//CORS

app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true
    })
  );

//DB Config

const db = require("./config//keys").mongoURI;

//Connect to MongoDB
mongoose.set('useFindAndModify', false)
mongoose.connect(db, 
    {useNewUrlParser: true,
    useUnifiedTopology: true }
    )
    .then(() => console.log("Database connected successfull!"))
    .catch(err => console.log(err));

    // Passport middleware
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server up and successfully running on port ${port} !`))