const {pool} = require('../db')
const { v4: uuidv4} = require('uuid')
const bcrypt = require('bcrypt')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try{
        const { employeeName, email, phone, password, department, designation, salary} = req.body

        const employeeID = uuidv4()
        const salt = await bcrypt.genSalt(Number(10))
        const hashedPassword = await bcrypt.hash(password, salt)
        const query = `INSERT INTO employee (employeeID, employeeName, email, phone, password ,department, designation, salary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [employeeID ,employeeName, email, phone, hashedPassword, department, designation, salary || 0.0]
        console.log(values)
        pool.query(query, values, (err, results) => {
            if(err) {
                console.error('Error inserting employee to DB', err)
                return res.status(500).json({message: 'Internal server error'})
            }

            res.status(201).json({message: 'Employee added succesfully'})
        })

    } catch (error) {
        res.status(500).send('Server error')
        console.error(error)
    }
})

module.exports = router;

