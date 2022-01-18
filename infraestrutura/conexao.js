const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'webalura'
})

module.exports = conexao;