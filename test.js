'use strict';


var TaosRestful = require('./taosrestful.js');

var someone = new TaosRestful("121.36.56.117","6041","root","msl110918");
someone.showDatabases();