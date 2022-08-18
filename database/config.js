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
exports.connect = async () => {
  global.dbInstance = await mysql2.createPool(DBCredentials);
  try{
    let [rows] = await dbInstance.query(`Select * from users`);
    rows.length 
    ? console.log("Connected to express database")
    : console.error("Failed to connect to database")
  }catch(err){
    console.error(err.message)
  }
}