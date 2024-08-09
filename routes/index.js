var express = require("express");
var router = express.Router();
var path = require("path");
var Student = require("../Controllers/student.controllers");
var Teacher = require("../Controllers/teacher.controller");
/* GET home page. */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "static", "index.html"));
});
/*get Dashboard Page */
router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "static", "dashboard.html"));
});
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "static", "signup.html"));
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "static", "login.html"));
});

/*Student Data Requests*/

/*Post Requests */
router.post("/dashboard/new", Student.createNewStudent);

/*Get Requests*/
router.get("/dashboard/getByRoll", Student.getDetailsByRollNumber);
router.get("/dashboard/getAllRecords", Student.getAllStudentsRecords);

/*Put Requests*/
router.put("/dashboard/updateStudentData", Student.updateStudentRecords);

/* Delete Requests */
router.delete("/dashboard/deleteStudentByRoll", Student.deleteStudentByRoll);

/*Teacher login*/

router.post("/signup", Teacher.createNewUser);
router.post("/login/verify", Teacher.verifyLogin);

module.exports = router;
