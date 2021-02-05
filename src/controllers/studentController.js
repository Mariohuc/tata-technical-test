const Student = require("../models/studentModel");

exports.getAllStudents = async (req, res, next) => {
  try {
    const result = await Student.getAll();

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const new_student = await Student.create(req.body);
    res.status(201).send({
      message: `Sucessfully submitted student with email ${new_student.email}`,
      studentId: new_student.id,
    });
  } catch (error) {
    next(error);
  }
};
