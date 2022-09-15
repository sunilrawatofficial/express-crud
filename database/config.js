"use strict"
const mysql2 = require('mysql2/promise')
const DBCredentials={
    host:process.env.sqlNOTEDBHOST,
    user: process.env.sqlNOTEDBUSERNAME,
    database: process.env.sqlNOTEDBNAME,
    password : process.env.sqlNOTEDBPASS,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
}
exports.connect = async () => {
    try {
        global.readDBInstance = mysql2.createPool(DBCredentials);
        await readDBInstance.query(`Select * from users`);
        console.log("Connected to express database")
        
        global.writeDBInstance =  mysql2.createPool(DBCredentials);
    }
    catch(err) {
        console.error(err.message)
    }
}