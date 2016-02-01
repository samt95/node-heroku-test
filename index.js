var express   =    require('express');
//var mysql     =    require('mysql');
var app       =    express();


app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
  response.render('pages/index');
});



// SQL stuff commented out

// var pool      =    mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'userDB',
//     debug    :  false
// });

// function handle_database(req,res) {
    
//     pool.getConnection(function(err,connection){
//         if (err) {
//           connection.release();
//           res.json({"code" : 100, "status" : "Error in connection database"});
//           return;
//         }   

//         console.log('connected as id ' + connection.threadId);
        
//         connection.query("SELECT * from Users",function(err,rows){
//             connection.release();
//             if(!err) {
//                 res.json(rows);
//             }           
//         });

//         connection.on('error', function(err) {      
//               res.json({"code" : 100, "status" : "Error in connection database"});
//               return;     
//         });
//   });
// }

// app.get("/",function(req,res){-
//         handle_database(req,res);
// });



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


