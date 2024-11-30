const router = require('express').Router()
const {pool} = require('../db')

router.get('/', async (req,res) => {
    try{
        const query = 'SELECT * FROM employee'

        pool.query(query, (err, results) => {
            if(err){
                return res.status(400).json('Error fetching employees')
            }
            if(results.length === 0){
                return res.status(404).json('Employees not found')
            }

            res.status(200).json(results)
        })
    } catch (error) {
        res.status(500).json('Internal server error')
        console.log(error)
    }
})

module.exports = router