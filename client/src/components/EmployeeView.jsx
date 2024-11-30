import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const EmployeeView = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const endpoint = 'http://localhost:5555'

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get(`${endpoint}/api/getallemployees`);
            console.log(response)
            setEmployees(response.data);
        };

        fetchEmployees();
    }, []);

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        // Navigate to the employee edit page
        navigate('/edit-employee', { state: { employee } });
    };

    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mb-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Employees</h2>

                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Phone</th>
                            <th className="px-4 py-2 border-b">Department</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td className="px-4 py-2 border-b text-center">{employee.employeeName}</td>
                                <td className="px-4 py-2 border-b text-center">{employee.email}</td>
                                <td className="px-4 py-2 border-b text-center">{employee.phone}</td>
                                <td className="px-4 py-2 border-b text-center">{employee.department}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={() => handleEditEmployee(employee)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeView