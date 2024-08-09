const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");
const StudentSchema = new Schema(
  {
    _id: String,
    name: String,
    dob: String,
    gender: String,
    mobileNumber: Number,
    address: String,
    stream: String,
    branch: String
  },
  {
    timestamps: true
  }
);
const StudentModel = mongoose.model("Student", StudentSchema);
module.exports = StudentModel;
