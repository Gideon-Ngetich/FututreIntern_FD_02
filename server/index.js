const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const db = require('./db')
const employee = require('./Routes/employeeSignup')
const department = require('./Routes/departments')
const getEmployess = require('./Routes/getDepartments')
const getEmployeeById = require('./Routes/getEmployeeById')
const updateEmployee = require('./Routes//employeeUpdate')
const deleteEmployee = require('./Routes/deleteEmployee')
const updateDepartment = require('./Routes/updateDepartment')
const getDepartments = require('./Routes/getDepartments')
const getDepartmentById = require('./Routes/getDepartmentById')
const deleteDepartment = require('./Routes/deleteDepartment')

const PORT = process.env.PORT

const app = express()
app.use(cors({
    origin: process.env.ENDPOINT,
    useCredentials: true
}))

app.use(express.json())

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

db.getConnection()
    .then(Connection => {
        console.log('Database connected')
        Connection.release()
    })
    .catch(error => {
        console.error('error connecting to database', error)
    })



app.use('/api/employee', employee)
app.use('/api/department', department)
app.use('/api/getemployees', getEmployess)
app.use('/api/employees', getEmployeeById)
app.use('/api/updateEmployee', updateEmployee)
app.use('/api/deleteemployee', deleteEmployee)
app.use('/api/updatedepartment', updateDepartment)
app.use('/api/getdepartments', getDepartments)
app.use('/api/getdepartmentbyid', getDepartmentById)
app.use('/api/deletedepartment', deleteDepartment)

app.get('/', (req, res) => {
    res.json('EMS')
})
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)

})


