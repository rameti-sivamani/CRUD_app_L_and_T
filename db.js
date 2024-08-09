const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
//const dbURI = "mongodb+srv://testuser:test123@cluster0.s3vuxyh.mongodb.net/Teacher";
const dbURI = "mongodb+srv://testuser:test123@cluster0.s3vuxyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Teacher";
//const dbURI = "mongodb://localhost:27017/Teacher";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });