//exporting mongoose
const mongoose = require('mongoose');
//creating the schema
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

//creating the model with "todoListSchema" as schema
const TodoList = mongoose.model('TodoList', todoListSchema);
//exporting the module so that it can be used by index.js(entry point)
module.exports = TodoList;