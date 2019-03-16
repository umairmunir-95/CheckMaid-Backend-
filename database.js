const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!',
    database: 'appdb'
});
 
mc.connect();

module.exports = mc; 