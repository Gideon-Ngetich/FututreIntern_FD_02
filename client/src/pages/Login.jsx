import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const endpoint = 'http://localhost:5555'
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setMessage('Email and password required')
        }

        setLoading(true)
        setMessage('')

        try {
            const response = await axios.post(`${endpoint}/api/employeelogin`, formData)
            const data = response.data


            if (response.status === 200) {
                console.log('Login successful')
                setMessage('Login Successful')

                if (data.user && data.user.id) {
                    localStorage.setItem('id', data.user.id)
                }
                
                navigate('/employeedashboard')
            } else {
                console.log('Invalid username or password')
                setMessage('Invalid username or password')
            }
        } catch (error) {
            console.error(error)
            setMessage('An error occured')
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
                {message && (
                    <div className={`mb-4 p-2 text-center text-white rounded-md ${message.includes("Successful")
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md text-lg hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
