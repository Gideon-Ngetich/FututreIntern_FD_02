const router = require('express').Router()
const {pool} = require('../db')

router.delete('/', async (req,res) => {
    try{
        const employeeID = req.query

        const query = `DELETE FROM employee WHERE employeeID = ?`

        pool.query(query, [employeeID.employeeID], (err,result) => {
            if(err){
                res.status(400).json('Error deleting employee')
                console.error(err)
                return;
            }

            res.status(200).json('Employee successfully deleted')
        })
    } catch(error) {
        res.status(500).json('Internal server error')
        console.error(error)
    }
    
})

module.exports = router;