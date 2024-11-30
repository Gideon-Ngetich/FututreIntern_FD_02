const router = require('express').Router()
const { pool } = require('../db')

router.get('/', async (req, res) => {
    try {
        const departmentId = req.query

        const query = 'SELECT * FROM departments WHERE departmentId = ?'

        pool.query(query, [departmentId.departmentId], (err, results) => {
            if(err) {
                res.status(400).json('Error fetching department')
                console.error(err)
                return;
            }

            res.status(200).json({message: 'Department fetched successfully', results})
        })
    } catch(error) {
        res.status(500).json('Intenal server Error')
        console.error(error)
    }
})

module.exports = router;