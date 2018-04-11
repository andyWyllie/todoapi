var db = require('../models');

// index route for todos
exports.getTodos =  function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

// create route for todos
exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

// show route for todos
exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.josn(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
}

// update route for todos
exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
}

// delete route for todos
exports.deleteTodo = function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'Todo deleted'});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;