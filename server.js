var express = require('express');
var app = express();

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));

app.get('/',function(req,res){
	res.sendFile('home.html',{'root': __dirname + '/templates'});
})

app.get('/signin',function(req,res){
	res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/signup',function(req,res){
	res.sendFile('signup.html',{'root': __dirname + '/templates'});
})

app.listen(3000,function(){
    console.log('Server started at http://localhost:3000')
});
