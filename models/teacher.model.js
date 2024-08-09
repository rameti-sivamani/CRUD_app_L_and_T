const TeacherModel = require("../schemas/users.schema");

TeacherModel.createNewUser = (dataObj) => {
  const newTeacher = new TeacherModel({
    _id: dataObj.username,
    name: dataObj.name,
    mobileNumber: dataObj.mobileNumber,
    gender: dataObj.gender,
    dob: dataObj.dob,
    password: dataObj.password,
  });

 return newTeacher
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
TeacherModel.getData=(username)=>{
  return TeacherModel.findOne({_id:username}).exec().then((result) => {
    return result;
  })
  .catch((err) => {
    return err
  });
}
module.exports = TeacherModel;
