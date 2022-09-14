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
        
        global.dbInstance = await mysql2.createPool(DBCredentials);
        await dbInstance.query(`Select * from users`);
        console.log("Connected to express database")
    }
    catch(err) {
        console.error(err.message)
    }
}