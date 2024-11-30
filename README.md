# Employee Management System

## Overview

The **Employee Management System** is a web-based application designed for managing employee information and departmental details. It provides an admin dashboard with the functionality to view, edit, and manage employees and departments.

---

## Features

### Admin Dashboard
- **Sidebar Navigation**:
  - Navigate to employees and departments sections.
- **Employees Table**:
  - Displays employee information such as name, email, phone, department, designation, and salary.
  - Includes an *Edit* button to modify employee details.
- **Departments Table**:
  - Lists all departments and allows editing department information.

### Functionalities
- **Employee Management**:
  - View all employees.
  - Edit employee details.
- **Department Management**:
  - View all departments.
  - Edit department details.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.

### Backend
- **Node.js**: For building the server-side logic.
- **Express**: As the backend framework.
- **Axios**: For making API requests.
- **MySQL**: As the database for storing employee and department details.

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system

2. **Install dependencies:**
    ``` bash
    cd server
    npm install
    cd ../client
    npm install

3. **Configure the environment variables:**
    ```bash
    DB_HOST=your_database_host
    DB_PORT=3306
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=employee_management_db

4. **Start the application:**
    - Start the backend server:
    ```bash
    cd server
    npm start

    ---
    - Start the frontend development server:
    ```bash
    cd client
    npm start

5. **Access the application:**
    - Open your browser and go to http://localhost:5173.






