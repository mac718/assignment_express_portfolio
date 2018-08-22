var express = require('express');
var router = express.Router();

const projects = require('../models/projects').projects;

var findProject = function(name) {
  return projects.find( project => name == project.name);
}

router.get('/:name', function(req, res, next) {
  var project = findProject(req.params.name);
  res.render('project', { project: project });
})

module.exports = router;