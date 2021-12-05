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
    const query = req.query; // is a json file specifies criterias like {"lgbtq":"Yes", "projectName":"projectName"}
    if (query["project name"] != undefined){
      query["project name"] = '/'+query["project name"]+'/';
    }
    Project.find(query, function(err, projects){
        if (err) return console.error(err);
        res.send(projects);
    })
  });

module.exports = router;