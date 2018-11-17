/*Burger Controller gets routing requests from client
and sends the request to the database for retrieval*/

var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

//gets all data from the burger database
router.get('/', function(req, res) {
    burger.all(function(data) {
        var burgs = {burgs:data};
        console.log(burgs);
        res.render('index', burgs);
    });
});

//adds new burger to database
router.post('/api/burger', function(req,res) {
    console.log(req.body);
    burger.insert(['burger_name', 'devoured'],
    [req.body.name, req.body.devoured], function(result) {
        //sends back id of new burger
        res.json({ id : result.insertId });
    });
});

//updates value of burger
router.put('/api/burger/:id', function(req, res) {
    var condition = "id = " + req.params.id;
    console.log('condition', condition);
    
    burger.update({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;