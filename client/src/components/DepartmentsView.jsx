import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const DepartmentsView = () => {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const endpoint = 'http://localhost:5555'

    useEffect(() => {
        const fetchDepartments = async () => {
            const response = await axios.get(`${endpoint}/api/getdepartments`);
            setDepartments(response.data);
        };

        fetchDepartments();
    }, []);

    const handleEditDepartment = (department) => {
        setSelectedDepartment(department);
        // Navigate to the department edit page
        navigate('/edit-department', { state: { department } });
    };

    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 w-full">
                <h2 className="text-xl font-semibold mb-4">Departments</h2>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Description</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((department) => (
                            <tr key={department.id}>
                                <td className="px-4 py-2 border-b text-center">{department.departmentName}</td>
                                <td className="px-4 py-2 border-b text-center">{department.description}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={() => handleEditDepartment(department)}
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

export default DepartmentsView