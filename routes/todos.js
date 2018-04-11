var express = require('express');
var router = express.Router();
var db = require('../models');

// index route for todos
router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

// create route for todos
router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

// show route
router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.josn(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
});


// update route
// router.put('/:todoId/edit', function(req, res){
//     db.Todo.findByIdAndUpdate()
// })


// delete route


module.exports = router;
