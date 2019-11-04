// DEPENDENCIES
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(friendData);       
    });
};