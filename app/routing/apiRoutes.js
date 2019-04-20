// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function (app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Set the post for the api/friends route
    app.post('/api/friends', function (req, res) {

        //  Sets variable for match
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

        // For-each loop to go through the data in friends.js to find a match
        friends.forEach(function (friend) {

            // Variables used to compare friends
            var matchedScoresArray = [];
            var totalDifference = 40; // Largest possible difference in scores

            // Function to help add totals
            function add(total, num) {
                return total + num;
            }

            // Loop to compare new user's score and those already in the friends.js file
            // Then changes scores to integers and finds the difference
            for (var i = 0; i < friend.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
            }

            // This reduces the matchScoresArray into a single value in a variable
            totalDifference = matchedScoresArray.reduce(add, 0);

            // Looks to see if the totalDifference is smaller than the previous difference
            if (totalDifference < difference) {
                
                // Set it as the previous difference
                difference = totalDifference;
                
                // Then these variables are used to store the appropriate friend match data
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        
        // This returns the result of the friend object witht the lowest difference
        // Then displays the matchName and matchPhoto
        res.json({
            name: matchName,
            photo: matchPhoto
        });

        // This adds the new users sent data object to friends.js
        friends.push(req.body);
    });
}