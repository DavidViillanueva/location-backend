const mysql = require('mysql');



// const dbConnection = async () => {

//     const connection = mysql.createConnection({
//         host: process.env.HOSTDB,
//         port: process.env.PORTDB,
//         user: process.env.USERDB,
//         password: process.env.PWDDB,
//         database: process.env.DATABASEDB
//     });
     

//     connection.connect( (err) => {
//         if (err) {
//           console.error('error connecting: ' + err.stack);
//           return;
//         }
       
//         console.log('connected as id ' + connection.threadId);
//     });
// }

module.exports = 
    mysql.createPool({
        host: process.env.HOSTDB,
        port: process.env.PORTDB,
        user: process.env.USERDB,
        password: process.env.PWDDB,
        database: process.env.DATABASEDB
    });
