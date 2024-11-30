const router = require('express').Router()
const { pool } = require('../db')

router.delete('/', async (req, res) => {
    try {
        const departmentId = req.query;

        const query = 'DELETE FROM departments WHERE departmentId = ?'

        pool.query(query, [departmentId.departmentId], (err) => {
            if (err) {
                res.status(400).json('Error deleting department')
                console.error(err)
                return;
            }

            res.status(200).json('Department deleted successfully')
        })
    } catch (error) {
        res.status(500).json('Internal server error')
        console.error(error)
    }
    
})

module.exports = router;