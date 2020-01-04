const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Bodyparser middleware

app.use( 
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config

const db = require("./config//keys").mongoURI;

//Connect to MongoDB
mongoose.connect(db, 
    {useNewUrlParser: true,
    useUnifiedTopology: true }
    )
    .then(() => console.log("Database connected successfull!"))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Server up and successfully running on port ${port} !`))