const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require("dotenv").config();

//For Importing Files

const SignUpRoute = require("./routes/Api/Root/signup");
const SignInRoute = require("./routes/Api/Root/signin");
const contactUsRoute = require("./routes/Api/ContactUs/contactUs");



const app = express();

app.use(cors());

app.use(express.json());


app.use("/" , SignUpRoute);
app.use("/" , SignInRoute);
app.use("/" , contactUsRoute);


mongoose.connect(
    "mongodb+srv://prince:prince1009@lineupx.8bdr5.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    () => {
      console.log("mongoose connected...");
    }
  );
  
  app.listen(5000, () => {
    console.log("server connected on port 5000");
  });