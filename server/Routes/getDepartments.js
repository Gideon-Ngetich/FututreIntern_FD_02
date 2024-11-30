const router = require('express').Router()
const { pool } = require('../db')

router.get('/', async (req, res) => {
    try {
        const query = `SELECT * FROM departments `

        pool.query(query, (err, results) => {
            if (err) {
                res.status(400).json({ message: 'Error fetching departments', })
                console.error(err)
            } else if(results.length === 0) {
                res.status(404).json({message: 'No departments found'})
            }

            res.status(200).json({ message: 'Fetch successfully', results})

        })

    } catch (error) {
        res.status(500).json('Internal server error')
        console.error(error)

    }

})

module.exports = router;