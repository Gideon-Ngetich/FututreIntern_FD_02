import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const employeeID = localStorage.getItem('id')

    const endpoint = "http://localhost:5555";

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`${endpoint}/api/employees?employeeID=${employeeID}`);
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch employee data.");
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-lg font-semibold text-gray-700">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-lg font-semibold text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Employee Dashboard</h2>
                {employees.map((employee) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>

                            <ul className="mt-4 space-y-2">
                                <li className="flex justify-between">
                                    <span className="font-medium">Name:</span>
                                    <span>{employee.employeeName}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Email:</span>
                                    <span>{employee.email}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Phone:</span>
                                    <span>{employee.phone}</span>
                                </li>
                            </ul>


                        </div>
                        <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Job Information</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between">
                                <span className="font-medium">Department:</span>
                                <span>{employee.department}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Designation:</span>
                                <span>{employee.designation}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Salary:</span>
                                <span>${employee.salary}</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeDashboard;
