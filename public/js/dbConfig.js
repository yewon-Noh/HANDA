const mysql = require('mysql');

var dbConfig = {
    host: '3.35.53.206',
    port: 3306,
    user: 'handa',
    password: '1234',
    database: 'handa'
};

var dbOptions = {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
};
var conn = mysql.createConnection(dbOptions);
conn.connect();

module.exports = dbConfig;
module.exports = dbOptions;
module.exports = conn;