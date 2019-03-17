const path = require('path');

console.log('HTML Routes Connected')

module.exports = function(app){

	// HTML GET Requests

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// If no matching route is found default to home
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    
    app.get('*', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
}

