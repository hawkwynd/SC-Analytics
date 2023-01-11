// Karen - song counter 
const getJSON             = require('get-json');
const prettyMilliseconds  = require('pretty-ms');
const config              = require('./config.json');
const mysql               = require('mysql');
const moment              = require('moment');
const sc                  = config.shoutcast; 

const con = mysql.createConnection({
    host: "localhost",
    user: "shoutcast",
    password: "hawkwynd2020",
    database: "hawkwyndradio"
  });

  con.connect();

console.log('\nOK - now start using callbacks and get some shit done, will ya?')


