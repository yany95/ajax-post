var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'831015',
    database:'mydb'
    
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);

    }else{

        console.log("succeed");
    }

})
app.listen(3000,function(){console.log('Express server is running at port no :3000')});

app.get('/user',function(req,res){
    mysqlConnection.query('SELECT * FROM USER',function(err,rows,fields){
        if(!err){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});