const router = require('express').Router()
const { pool } = require('../db')

router.get('/', async (req, res) => {
    try {
        const employeeID  = req.query
        console.log(employeeID)

        const query = `SELECT * FROM employee WHERE employeeID = ?`
        console.log(query)

        pool.query(query, [employeeID.employeeID],(err, results) => {
            if (err) {
                res.status(400).json({ message: 'Error fetching Employee details' })
                console.error(err)
                return
            } 

            res.status(200).json(results)
            console.log(results)

        })
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
        console.error(error)
    }
    
})

module.exports = router