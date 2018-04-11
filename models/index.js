var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

var todoRoutes = require('../routes/todos');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');