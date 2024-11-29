const router = require('express').Router()
const { pool } = require('../db')
const { v4: uuid } = require('uuid')

router.post('/', async (req, res) => {
    try {
        const { departmentName, description } = req.body;

        const departmentID = uuid()

        const query = `INSERT INTO departments (departmentID, departmentName, description) VALUES (?, ?, ?)`
        const values = [departmentID, departmentName, description]

        pool.query(query, values, (err) => {
            if (err) {
                return res.status(400).json('Error adding department')
                console.error(err)
            }

            res.status(201).json('Department added successfully')
        })
    } catch (error) {
        res.status(500).json("Internal server error")
        console.log(error)
    }
   
})

module.exports = router;
