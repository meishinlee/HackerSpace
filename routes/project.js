const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Get all projects
router.get("/", function (req, res) {
    Project.find({})
      .then((projects) => {
        res.send(projects);
      });
  });

// Get project based on search criteria
router.get("/filters", function (req, res) {
    const data = req.params; // is a json file specifies criterias like {"lgbtq":"Yes", "projectName":"projectName"}
    const query = {}
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key == "project name"){
                query[key] = '/'+data[key]+'/';
            } else {
                query[key] = data[key];
            }
        }
    }
    Project.find(query)
      .then((projects) => {
        res.send(projects);
      });
  });

module.exports = router;