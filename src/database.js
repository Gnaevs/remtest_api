//objeto de conexion
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'romeodb.ces3t7qkua44.us-east-2.rds.amazonaws.com',
    port: '3306',
    user:'romeo',
    password: 'RomeoL38',
    database: 'romeodb'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Conexion exitosa');
    }
});

module.exports = mysqlConnection;