
var path = require('path');

var friends = require('../App/data/friends.js');

// Export API routes
module.exports = function(app) {
	

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		

		var userResponses = userInput.scores;
		

		// Get match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		
		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var k = 0; k < userResponses.length; k++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}	
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};