//Server runs the burger joint
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

//############ HANDLEBARS ###################
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ################# ROUTES #################
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//START SERVER LISTENING
app.listen(PORT, function() {
    console.log("Server listening on Port:" + PORT);
});