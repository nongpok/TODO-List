//require the libaray
const mongoose = require('moongose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection to see if it's successfull
const db = mongoose.connection;


//on error
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running
db.once('open', function(){
    console.log("Successfully connected to the database");
});