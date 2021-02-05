const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.route("/").get(studentController.getAllStudents);
router.route("/").post(studentController.createStudent);


module.exports = router;