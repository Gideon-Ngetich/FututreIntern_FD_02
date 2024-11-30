const router = require('express').Router()
const { pool } = require('../db')

router.get('/', async (req, res) => {
    try {
        const employeeID  = req.query

        const query = `SELECT * FROM employee WHERE employeeID = ?`

        pool.query(query, [employeeID.employeeID],(err, results) => {
            if (err) {
                res.status(400).json({ message: 'Error fetching Employee details' })
                console.error(err)
                return
            } 
            // if(results.length === 0){
            //     res.status(404).json('Employee not found')
            //     return;
            // }
            res.status(200).json(results)
        })
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
        console.error(error)
    }
    
})

module.exports = router