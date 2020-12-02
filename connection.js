import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "chris",
    password: "root",
    database: "mqtt"
});

export default connection;