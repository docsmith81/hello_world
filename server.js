var express = require('express'), 
	mysql = require('mysql'),
	json = require('json');

var app = express();

var connection = mysql.createConnection({
	host		: 'helloworlduseast1.cyjsfa15axuh.us-east-1.rds.amazonaws.com',
	user		: 'hwadmin',
	password	: '..Wide..Open',
	port		: '3306'
});

app.get('/', function (req, res) {
	//res.send('Hello World!');
	connection.query('SELECT first_name,last_name,position,salary from helloworld.employees ORDER BY RAND() LIMIT 1', function(err, rows, fields) {
		var json_rows = JSON.stringify(rows).slice(1, -1);
		var line = JSON.parse(json_rows);
		if (!err)
			res.send('City of Chicago employee ' + line['first_name'] + ' ' + line['last_name'] + ' makes ' + line['salary'] + '/year as a ' + line['position']);
		else
			res.send('Error while performing Query.');
	});
});

app.listen(80, function () {
  console.log('This app is listening on port 80!');
});
