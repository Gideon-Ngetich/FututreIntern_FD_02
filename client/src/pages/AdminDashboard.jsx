import React from 'react';
import Sidebar from '../components/Sidebar';
import EmployeeView from '../components/EmployeeView';

const AdminDashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-semibold mb-6">Employee Management</h1>
                <EmployeeView />                
            </div>
        </div>
    );
};

export default AdminDashboard;
