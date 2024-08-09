var TeacherModel = require("../models/teacher.model");
var Teacher = {};

Teacher.createNewUser = (req, res, next) => {
  const dataObj = req.body.dataObj;
  TeacherModel.createNewUser(dataObj)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};

Teacher.verifyLogin = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  return TeacherModel.getData(username)
    .then((user) => {
      if (!user) {
        return res.json({ success: false, message: "invalid Username" });
      } else if (user.password !== password) {
        return res.json({ success: false, message: "invalid Password" });
      }
      return res.json({ success: true });
    })
    .catch((err) => {
      return res.json(err);
    });
};
module.exports = Teacher;
