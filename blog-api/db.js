const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: 'Ameran.07',       
    database: 'blog'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectarse:', err);
        return;
    }
    console.log('Conexión establecida');
});

module.exports = connection;
