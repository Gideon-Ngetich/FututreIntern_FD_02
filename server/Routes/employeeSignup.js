const {db} = require('../db')
const { v4: uuidv4} = require('uuid')
const bcrypt = require('bcrypt')
const router = require('express').Router()

const signup = async (db, employeeInfo) => {
    const { employeeName, email, phone, password } = employeeInfo
    
    const employeeID = uuidv4()
    const salt = await bcrypt.genSalt(Number(10))
    const hashedPassword = await bcrypt.hash(password, salt)
    const query = 'INSERT INTO employee (employeeID, employeeName, email, phone, password) VALUE (?, ?, ?, ?, ?)';

    const value = [employeeID, employeeName, email, phone, hashedPassword]

    try{
        await db.query(query, value);
        console.log('Employee registered successfully')
        return employeeID
    } catch(error) {
        console.error(error)
        throw error
    }
}

router.post('/', async (req, res) => {
    try{
        const { employeeName, email, phone, password} = req.body
        
    }
})

