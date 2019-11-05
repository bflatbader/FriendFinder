// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Default directory
app.use(express.static(path.join(__dirname, 'app/public')));

// Router
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });