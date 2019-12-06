const serverless = require('serverless-http');
const express = require('express');
const resume = require('./resume.json');
const app = express();

app.get('/', function(req, res) {
  res.send(
    'Hello! 👋 My name is Chris J Mears and this is my resume API! Try the following paths to see more: /personal, /websites, /education, /experience, /skills, /supplemental, /all'
  );
});
app.get('/personal', function(req, res) {
  res.send(resume.personal);
});
app.get('/websites', function(req, res) {
  res.send(resume.websites);
});
app.get('/education', function(req, res) {
  res.send(resume.education);
});
app.get('/experience', function(req, res) {
  res.send(resume.experience);
});
app.get('/skills', function(req, res) {
  res.send(resume.skills);
});
app.get('/supplemental', function(req, res) {
  res.send(resume.supplemental);
});
app.get('/all', function(req, res) {
  res.send(resume);
});

module.exports.handler = serverless(app);
