const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'cocosbarrancos',
    password: 'linux789',
    port: 5432
});

module.exports = pool;