var mariadb = require('mariadb');
var util = require('util');

var pool = mariadb.createPool({
    connectionLimit: 10,
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,

    //despliegue

    port: process.env.MARIADB_PORT || 4000,
    connectTimeout: 10000, 
    acquireTimeout: 10000,
    ssl: {
        rejectUnauthorized: false // para TiDB Cloud
    }
});

module.exports = pool;