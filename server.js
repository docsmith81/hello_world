var express = require('express'), 
	mysql = require('mysql');

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
		var line = JSON.parse(rows);
		var first_name = line['first_name'];
		var last_name = line['last_name'];
		var salary = line['salary'];
		var position = line['position'];
		if (!err)
			//res.send('My name is ', alert(line['first_name']), alert(line['last_name']), ' and I make ',  alert(line['salary']), ' as a ', alert(line['position']));
			res.send('My name is ', rows);
		else
			res.send('Error while performing Query.');
	});
});

app.listen(80, function () {
  console.log('This app is listening on port 80!');
});
