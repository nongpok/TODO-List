const express = require('express');
const port = 8000;
const app = express();


app.get('/', function(req, res){
    return res.send('<h1>Running</h1>');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port : ${port}`);
});