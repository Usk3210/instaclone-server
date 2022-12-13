const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://suresh:hd2E44bHOwLoDw5V@cluster0.uycslw0.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
