import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { Link } from 'react-router-dom';

const AuthForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        
            // Make API call to login endpoint
             axios.post('http://localhost:8080/api/auth/login', formData)
             .then(result=>console.log(result))
             .catch(err=> console.log(err))
            
            // const userId = response.data.userId;
            // localStorage.setItem('userId', userId);

            // Redirect to the specific user's portal based on user ID
            window.location.href = '/incentives';
        
        // catch (error) {
        //     console.error('Login error:', error);
        //     // Handle login error (e.g., display error message to user)
        // }
    };

    return (
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label><strong>Email</strong>
                    
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Email" className='form-control rounded-0' />
                </label>
                </div>
                <br />
                <div className='mb-3'>
                <label>
                    <strong>Password</strong>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter Password" className='form-control rounded-0' />
                </label>
                <br />
                </div>
                <button className='btn btn-success w-90 rounded-0 mb-2' type="submit">Login</button>
            </form>

            <p>
        Already have an account? <Link to="/register">Register</Link>
      </p>
        </div>
        </div>
    );
};

export default AuthForm;
