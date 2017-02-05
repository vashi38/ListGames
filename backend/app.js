var express = require('express');
var mysql      = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();
connection.query("SELECT * from `table 8` order by score", function (error, results) {
  if (error) throw error;
  else {
      rows = results;
  }
});




// app.use(bodyParser());
app.get('/',function(req, res){

      console.log(rows);
      res.send(rows);
    });




app.post('/login', urlencodedParser,function (req, res){
  connection.query("SELECT * from `users` where username = "+req.body.username+"", function (error, results) {
    if (error) throw error;
    else {
        res.send(row);
        console.log(row);
    }
});

res.send(req.body);
});

app.post('/addUser', urlencodedParser, function (req, res){
  connection.query("SELECT * from `users` where username = "+req.body.username+"", function (error, results) {
    if (error) throw error;
    else {
        res.send(row);
        console.log(row);
    }
});

res.send(req.body);
});


connection.end();

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
