var StudentModel = require("../models/student.model");
const Student = {};

/*Create a Student in the Database*/

Student.createNewStudent = (req, res, next) => {
  const dataObject = req.body.dataObject;
  StudentModel.createStudent(dataObject)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};

/*Retrive a Student by Roll Number from the Database*/

Student.getDetailsByRollNumber = (req, res, next) => {
  const roll = req.query.rollNumber;
  return StudentModel.getStudentByRoll(roll)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};

/*Retrive All Student Records from  the Database*/

Student.getAllStudentsRecords = (req, res, next) => {
  return StudentModel.getAllStudentsDetails()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};

/*Update a Student by Roll Number in the Database*/

Student.updateStudentRecords = (req, res, next) => {
  const newData = req.body.dataObject;
  StudentModel.updateStudentDetails(newData)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};

/*Delete a Student by Roll Number from the Database*/

Student.deleteStudentByRoll = (req, res, next) => {
  var roll = req.query.rollNumber;
  StudentModel.deleteByRollNumber(roll)
    .then((result) => {
      return res.json({
        deletedCount: result.deletedCount,
      });
    })
    .catch((err) => {
      return res.json(err);
    });
};

module.exports = Student;
