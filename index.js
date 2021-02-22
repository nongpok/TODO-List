const express = require('express');
const port = 8000;

const db = require('./config/mongoose');

const TodoList = require('./models/todo_list');

const app = express();




app.set('case sensitive routing', false);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ 'extended' : true}));
app.use(express.static('assets'));



app.get('/', function(req, res){

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


app.post('/create-task', function(req, res){
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

    /* added ids */
    /* deleting many documents with given ids together. "$in" searches for "any" id from the given list of ids */
    TodoList.deleteMany({_id:{$in:ids}}, function(error)
    {
        if(error)/* on error */
        {
            console.log('Unable to delete from the database.');
            return;
        }
        /* if no error */
        return res.redirect('back');
    });
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port : ${port}`);
});