var express    = require("express");
var cors = require('cors');
 var mysql      = require('mysql');
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false });

 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'test'
 });
 var app = express();
app.use(cors());
 // app.use(bodyParser.json());
 // app.use(function(req, res, next) {
 //   res.header("Access-Control-Allow-Origin", "*");
 //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 //   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
 //    next();
 // });
connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");
 } else {
     console.log("Error connecting database ... \n\n");
 }
 });

 app.get("/",function(req, res, next){
 connection.query('SELECT * from `table 8`', function(err, rows, fields) {
 // connection.end();
 res.send(rows);
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
   });

 });
 app.post('/login', urlencodedParser, cors(), function(req, res, next){

    username = req.body.username;
    password = req.body.password;
    connection.query('SELECT * from `users` where username = "'+username+'" ', function(err, rows, fields) {
   //  connection.end();
    res.send(rows);
     if (!err)
        console.log('The solution is: ', rows);
     else
        console.log('Error while performing Query.');
     });
});

app.post('/signup', urlencodedParser, function(req, res, next){
   fullname = req.body.fullName;
   username = req.body.username;
   password = req.body.password;
   connection.query('INSERT INTO users values("'+username+'","'+password+'","'+fullname+'")', function(err, rows, fields) {
   connection.end();
   res.send(rows);
    if (!err)
       console.log('The solution is: ', rows);
    else
       console.log('Error while performing Query.');
    });

});

 app.listen(3000);
