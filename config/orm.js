var connection = require('../config/connection.js');

var orm = {
  all: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table + ' (';
    queryString += cols.toString();
    queryString += ') VALUES (?)';
    console.log(queryString);
    connection.query(queryString, [vals], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + objColVals + ' WHERE ' + condition;
    console.log(queryString);
    console.log(objColVals);
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;