const mongoose = require('mongoose');
const todoListSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    due_date:{
        type: Date
    }
});

const TodoList = mongoose.model('TodoList', todoListSchema);
module.exports = TodoList;