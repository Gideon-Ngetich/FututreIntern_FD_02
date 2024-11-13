const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const db = require('./db')

const PORT = process.env.PORT

const app = express()
app.use(cors({
    origin: process.env.ENDPOINT,
    useCredentials: true
}))

db.getConnection()
    .then(Connection => {
        console.log('Database connected')
        Connection.release()
    })
    .catch(error => {
        console.error('error connecting to database', error)
    })


app.get('/', (req, res) => {
    res.json('EMS')
})
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)

})
