// 
// 	make sure this relates to the SWAGGER docs

var request = require('request');		//  npm install request --save

module.exports = {
	getRestaurants: getRestaurants 
}

function getRestaurants (req, res) {
	request('http://api.usergrid.com/app-workshop/sandbox/restaurants',		// FIXME change app-workshop  to ORG
		function (error, response, body) {
			// res.send(body);

			if (error) {
				res.send(error);				// ALWAYS handle ERRORS! esp on mobile
			} else {
				var results = {};
				results.entities = JSON.parse(body).entities;  // Naming the object coming back
				res.send(results);	
			}


		});
}