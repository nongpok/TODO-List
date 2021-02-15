const express = require('express');
const port = 8000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));


app.get('/', function(req, res){
    return res.render('home');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port : ${port}`);
});