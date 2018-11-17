/*ORM Controlls direct access to the database and 
structures queries in MySQL format.*/
var connection = require('../config/connection.js');

//gets question marks equal to the number of params for query
function sqlHide(num) {
    var arr = [];
    for (var i = 0; i<num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

//Converts object to SQL syntax
function sql_ize(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var val = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations
        if (typeof val === "string" && val.indexOf(" ") >= 0) {
          val = "'" + val + "'";
        }
        arr.push(key + "=" + val);
      }
    }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
    //selects all values in table
    selectAll: function(table, cb) {
        var query = "SELECT * FROM " + table + ';';
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //inserts value into table specified
    insertOne: function(table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
        query += " (" + cols.toString() + ') ';
        query += "VALUES (";
        query += sqlHide(vals.length);
        query += ") ";

        console.log(query , vals);

        connection.query(query, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    //updates values in table
    updateOne: function(table, colVals, condition, cb) {
        var query = "UPDATE " + table;
        query += " SET " + sql_ize(colVals);
        query += " WHERE " + condition;

        console.log(query);
        
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;