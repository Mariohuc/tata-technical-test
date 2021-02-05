const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.route("/").get(personController.getAllPeople);

router.route("/:personId").get(personController.getPerson);

module.exports = router;
