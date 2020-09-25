const knex = require('knex');

const connection = knex({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'e2e',
        password : 'e2e',
        database : 'e2e_database'
    }
});

module.exports = connection;