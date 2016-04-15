var express = require('express'), 
	mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
	host		: 'helloworlduseast1.cyjsfa15axuh.us-east-1.rds.amazonaws.com',
	user		: 'hwadmin',
	password	: '..Wide..Open'
});



app.get('/', function (req, res) {
	res.send('Hello World!');
	connection.query('SELECT first_name,last_name from helloworld.employees ORDER BY RAND() LIMIT 1', function(err, rows, fields) {
		if (err) throw err;
		console.log('My name is ', rows[0].solution);
	});
});

app.listen(80, function () {
  console.log('This app is listening on port 80!');
});
