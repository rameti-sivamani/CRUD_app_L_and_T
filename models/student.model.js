const StudentModel = require("../schemas/student.schema");

StudentModel.createStudent = (dataObject) => {
  const newStudent = new StudentModel({
    _id: dataObject.rollNumber,
    name: dataObject.name,
    dob: dataObject.dob,
    gender: dataObject.gender,
    mobileNumber: dataObject.mobileNumber,
    address: dataObject.address,
    stream: dataObject.stream,
    branch: dataObject.branch,
  });

  return newStudent
    .save()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
StudentModel.getStudentByRoll = (roll) => {
  return StudentModel.findOne({ _id: roll })
    .exec()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
StudentModel.getAllStudentsDetails = () => {
  return StudentModel.find({})
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

StudentModel.deleteByRollNumber = (rollNumber) => {
  return StudentModel.deleteMany({ _id: rollNumber })
    .exec()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
StudentModel.updateStudentDetails = (dataObject) => {
  const result = StudentModel.updateOne(
    { _id: dataObject.rollNumber },
    {
      $set: {
        name: dataObject.name,
        dob: dataObject.dob,
        gender: dataObject.gender,
        mobileNumber: dataObject.mobileNumber,
        address: dataObject.address,
        stream: dataObject.stream,
        branch: dataObject.branch,
      },
    }
  ).exec();

  return result;
};

module.exports = StudentModel;
