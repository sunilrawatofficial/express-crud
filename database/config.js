"use strict"
const mysql2 = require('mysql2/promise')
const DBCredentials={
    host:'sql6.freesqldatabase.com',
    user: 'sql6512771',
    database: 'sql6512771',
    password : 'QmktKLuTLp',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
}
// exports.connect = async () => {
//     try {
//         global.dbInstance = await mysql2.createPool(DBCredentials);
//         await dbInstance.query(`Select * from users`);
//         console.log("Connected to express database")
//     }
//     catch(err) {
//         console.error(err.message)
//     }
// }