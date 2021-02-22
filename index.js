//imported the express
const express = require('express');
//the port on which the server will be working 
const port = 8000;
//configuring the database
const db = require('./config/mongoose');
//the database model
const TodoList = require('./models/todo_list');
//instantializing the app
const app = express();

//the routes shouldn't be case sensitive 
app.set('case sensitive routing', false);
//seting up the view engine
app.set('view engine', 'ejs');
//setting up the views folder
app.set('views', './views');
//using url encoder to get the query params
app.use(express.urlencoded({ 'extended' : true}));
//setting up the assets folder for the static files
app.use(express.static('assets'));


//homepage for our app
app.get('/', function(req, res){
    //fetching all the available tasks  from the database
    TodoList.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching the tasks list form the database');
            return;
        }
        return res.render('home', {
            taskLists: tasks
        });
    });
});

//creating a task from the request
app.post('/create-task', function(req, res){
    //creating the task in the database
    TodoList.create(req.body, function(err, newTask){
        if(err){
            console.log('error in creating a task', err);
            return;
        }
        console.log('****************', newTask);
        return res.redirect('back');
    });
});

app.get('/delete-task/', function(req, res)
{
    /* I will store all the ids in this array and will be using these ids to delete from the database */
    let ids=new Array();
    for(let i in req.query)
    {
        ids.push(req.query[i]);
    }
    console.log(req.query);
    /* deleting many documents with given ids together. "$in" searches for "any" id from the given list of ids */
    TodoList.deleteMany({_id:{$in:ids}}, function(error)
    {
        if(error)
        {
            console.log('Unable to delete from the database.');
            return;
        }
        return res.redirect('back');
    });
});

//listening to the port 8000
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port : ${port}`);
});