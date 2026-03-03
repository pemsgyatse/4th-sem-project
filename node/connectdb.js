const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/studentDatacollection")
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
