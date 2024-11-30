const router = require('express').Router()
const {pool} = require('../db')

router.put('/', async (req,res) => {
    const employeeID = req.query;
    const { employeeName, email, phone, password ,department, designation, salary } = req.body;

    const query = `UPDATE employee SET employeeName = ?, email = ?, phone = ?, password = ? ,department = ?, designation = ?, salary = ? WHERE employeeID = ?`

    const values = [employeeName, email, phone, password ,department, designation, salary, employeeID.employeeID]

    pool.query(query, values, (err, result) => {
        if(err) {
            res.status(400).json({message: 'Error updating Emmployee'})
            console.error(err)
            return
        }

        res.status(500).json({message: 'Employee updated successfully'})
    })
})

module.exports = router;