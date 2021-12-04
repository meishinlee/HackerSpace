const express = require("express");
const router = express.Router();
const Project = require("../models/project");

//Get all projects
router.get("/", function (req, res) {
    Project.find()
      .then((projects) => {
        res.send(projects);
      });
  });

module.exports = router;