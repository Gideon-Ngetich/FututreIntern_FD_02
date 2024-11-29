const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: process.env.WAITFORCONNECTIONS,
    // connectioLimit: process.env.CONNECTIONLIMIT,
    queueLimit: process.env.QUEUELIMIT
})

module.exports = pool.promise()