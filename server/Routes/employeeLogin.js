const router = require('express').Router()
const { pool } = require('../db')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email)

        const query = 'SELECT * FROM employee WHERE email = ?'

        pool.query(query, [email], (err, results) => {
            if(err){
                res.status(400).json('Error logging in')
                return
            }

            if(results.length === 0 ){
                res.status(404).json('User does not exist')
                return
            }
            const user = results[0]

            const validatePassword =  bcrypt.compare(password, user.password)
            if(!validatePassword) {
                res.status(401).json("Invalid credentials")
            }

            res.status(200).json({message: 'Login successfull', user: {
                id: user.employeeID,
                userName: user.employeeName,
                email: user.email,
                phone: user.phone,
                department: user.department,
                designation: user.designation,
                salary: user.salary
            }})
        })
    } catch (error) {
        res.status(500).json('Internal server error')
        console.error(error)
    }
    
})

module.exports = router