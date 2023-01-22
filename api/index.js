const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql-container',
    port: '3306',
    user: 'root',
    password:'programadorabordo',
    database:'programadorabordo'
});

connection.connect();

app.get('/products', function(req, res){
    connection.query('select * from products', function(error,results){
        if(error){
            console.log(error + "teve erro aqui");
            throw error;
        };

        res.send(results.map(item => ({ name: item.name, price: item.price}
            )));
    });
});

app.listen(9001, '0.0.0.0', function(){
    console.log('Linstening on port 9001');
});