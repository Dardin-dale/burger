/*Burger Model uses data from the burger_controller
The model and relays it to the ORM for the burgers table*/

var orm = require('../config/orm.js');

var burger = {
    //selects all from burgers
    all: function(cb) {
        orm.selectAll('burgers', function(res) {  
            cb(res);
        });
    },

    //Inserts a new value using ORM
    insert: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    //updates burger selected in condition
    update: function(colVals, condition, cb) {
        orm.updateOne('burgers', colVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;