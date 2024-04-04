const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Shaik@5f3",
    database: "myDB"
})

module.exports = client