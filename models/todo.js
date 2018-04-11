var mongoose = require('mongoose');


// Creating todo schema
// name
// completed
// created_date
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

// convert to model
var Todo = mongoose.model('Todo', todoSchema);

// export model
module.exports = Todo;