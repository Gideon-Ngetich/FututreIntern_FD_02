// EditEmployee.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { end } from '../../../server/db';

const EditEmployee = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(state?.employee || {});
  const endpoint = 'http://localhost:5555'

  useEffect(() => {
    if (!employeeData.employeeID) {
      // Fetch the data based on ID if it's not passed through state
      const fetchEmployeeData = async () => {
        const response = await axios.get(`${endpoint}/api/employees?employeeID=${employeeData.employeeID}`);
        setEmployeeData(response.data);
      };
      fetchEmployeeData();
    }
  }, [employeeData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`${endpoint}/api/updateEmployee?employeeID=${employeeData.employeeID}`, employeeData);
      navigate('/admindashboard/employee')
    } catch (error) {
      console.error('Error saving employee data:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            value={employeeData.userName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={employeeData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;
