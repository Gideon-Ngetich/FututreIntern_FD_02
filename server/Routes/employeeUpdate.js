const router = require('express').Router()
const {pool} = require('../db')

router.put('/', async (req,res) => {
    const emaployeeID = req.query;
    const { employeeName, email, phone, department, designation, salary } = req.body;

    const query = `UPDATE employee SET employeeName = ?, email = ?, phone = ?, department = ?, designation = ?, salary = ? WHERE employeeID = ?`
    console.log(query)

    pool.query(query, [employeeName, email, phone, department, designation, salary, emaployeeID.emaployeeID], (err, result) => {
        if(err) {
            res.status(400).json({message: 'Error updating Emmployee'})
            console.error(err)
            return
        }

        res.status(500).json({message: 'Employee updated successfully'})
    })
})

module.exports = router;