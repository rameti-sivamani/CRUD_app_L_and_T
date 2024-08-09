const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const userSchema = mongoose.Schema;

const TeacherSchema = new userSchema(
  {

    _id: String,
    name: String,
    mobileNumber: Number,
    gender: String,
    dob: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
const TeacherModel = mongoose.model("teacher", TeacherSchema);
module.exports = TeacherModel;
