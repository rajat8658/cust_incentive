import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import {Link} from 'react-router-dom'

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div >
      <h2>Admin Panel</h2>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
      <div className='bs '>
        {(users.map(user => {
          return <div className='bs adminForm'>
           key={user.id}
           <p>Username: {user.username}</p>
           <p>Email: {user.email}</p>
           <p>Role: {user.role}</p>
           <button className='btn btn-primary bs2' onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
        }
          
          
        ))}

     <p>
        Add Holiday Packages <Link to="/holiday-packages">Click here</Link>
      </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AdminPanel;
