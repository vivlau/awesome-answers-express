const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
// const {Question} = require('../models/index');

router.get('/', function (request, response, next) {
  Question
    .findAll()
    .then(function (questions) { // allowing us to use .then
      // the path of the template that response.render takes
      // is relative to the view/ folder by default
      response.render('questions/index', {questions: questions});
      // the second argument passed to response.render is an
      // object where all its properties will be available to
      // the rendered template as variables
    });
})

// #Questions#show URL: /questions/:id VERB: GET
// for a url '/questions/99', the req.params object will be equal to {id:'99'}
router.get('/:id', function (req, res) {
  // res.send(req.params); //.send is used to test. render is used for rendering the actual page!
  const id = req.params.id;
  Question.findById(id)
    .then(function (question){
    res.render('questions/show', {question: question});
    })
})


module.exports = router;
