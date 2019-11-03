// DEPENDENCIES
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
};