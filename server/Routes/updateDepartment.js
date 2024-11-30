const router = require('express').Router()
const {pool} = require('../db')

router.put('/', async (req,res) => {
    try{
        const departmentID = req.query;
        const { departmentName, description} = req.body

        const query = 'UPDATE departments SET departmentName = ?, description = ? WHERE departmentID = ?'

        const values = [departmentName, description, departmentID.departmentId]

        pool.query(query, values, (err) => {
            if(err) {
                res.status(400).json('Error updating department')
                console.error(err)
                return;
            }

            res.status(200).json('Department updated successfully')
        })

    } catch (error) {
        res.status(500).json('Internal server error')
        console.error(error)
    }
    
})

module.exports = router;