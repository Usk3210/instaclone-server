const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGOURL,{useNewUrlParser: true})
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
