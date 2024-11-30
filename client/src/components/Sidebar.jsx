import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className='h-full'>
            <div className="w-64 bg-gray-800 text-white p-6 h-full">
                <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
                <ul>
                    <li className="mb-4">
                        <button
                            onClick={() => navigate('/admindashboard/employee')}
                            className="w-full text-left text-lg hover:bg-gray-700 p-2 rounded-md"
                        >
                            Employees
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/admindashboard/departments')}
                            className="w-full text-left text-lg hover:bg-gray-700 p-2 rounded-md"
                        >
                            Departments
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar