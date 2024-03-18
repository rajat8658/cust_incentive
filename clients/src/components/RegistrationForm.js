import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'employee' // Set default role to employee
  });

  const { username, email, password, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', formData);
      console.log(res.data);
      
      // Redirect based on user role
      if (role === 'admin') {
        window.location.href='/holiday-packages';
      } else if (role === 'employee') {
        window.location.href='/incentives';
      }
    } catch (err) {
      console.error(err.response.data);
      // Show error message to the user
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
    <div className='p-3 rounded w-25 border registerForm'>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label><strong>Username</strong></label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
            placeholder="Enter User Name"
            className='form-control rounded-0'
          />
        </div>
        <div className='mb-3'>
          <label><strong>Email</strong></label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter Email Id"
            className='form-control rounded-0'
          />
        </div>
        <div className='mb-3'>
          <label><strong>Password</strong></label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="6"
            required
            placeholder="Enter correct Password"
            className='form-control rounded-0'
          />
        </div>

        <div><br/>
          <legend>Role:</legend>

          <div>
            <input 
              type="radio" 
              id="admin" 
              name="role" 
              value="admin" 
              checked={role === 'admin'} // Set checked state based on role
              onChange={handleChange}
              required 
            />
            <label htmlFor="admin">Admin</label>
          </div>

          <div>
            <input 
              type="radio" 
              id="employee" 
              name="role" 
              value="employee" 
              checked={role === 'employee'} // Set checked state based on role
              onChange={handleChange}
              required 
              
            />
            <label htmlFor="employee">Employee</label>
          </div>
        </div><br/>
        <button className='btn btn-success w-90 rounded-0 mb-2' type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
};

export default RegistrationPage;
