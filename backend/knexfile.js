module.exports = {
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'e2e',
        password : 'e2e',
        database : 'e2e_database'
    },
    migrations: {
        directory: './src/database/migrations'
    }
}