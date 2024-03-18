import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const IncentiveForm = () => {
    const [sales, setSales] = useState('');
    const [incentive, setIncentive] = useState('');
    const [bonus, setBonus] = useState('');
    const [holidayPackageEligibility, setHolidayPackageEligibility] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Calculate incentive details
        const response = await axios.post('http://localhost:8080/api/incentives/calculate-incentive', { sales });

        // Update state based on response
        setIncentive(response.data.incentive);
        setBonus(response.data.bonus);
        setHolidayPackageEligibility(response.data.holidayPackageEligibility ? 'Eligible' : 'Not Eligible');
    };

    const handleSendTextMessage = async () => {
        try {
            // Send text message to the employee's email address
            await axios.post('http://localhost:8080/api/notifications/send-email', {
                incentive,
                bonus,
                holidayPackageEligibility
            });
            alert('Text message sent successfully');
        } catch (error) {
            console.error('Error sending text message:', error);
            alert('Failed to send text message');
        }
    };

    const handleRedirectToHoliday = () => {
        // Redirect to /holiday route
        window.location.href = '/holiday';
    };

    return (
      <div className='d-flex justify-content-center align-items-center vh-100 incentivePage'>
      <div className='p-3 rounded w-25 border loginForm'>
            <h2>Incentive Calculator</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
              <label>
                    Enter Sales:
                    <input type="number" value={sales} onChange={(e) => setSales(e.target.value)} required className='form-control' />
                </label>

              </div>
                
                <button className='btn btn-success w-90  mb-2' type="submit">Calculate Incentive</button>
            </form>
            <div>
            <div className='bs mb-3'>
                <p>Incentive: {incentive}</p>
                <p>Bonus: {bonus}</p>
                <p>Holiday Package Eligibility: {holidayPackageEligibility}</p>
                </div>
                {holidayPackageEligibility === 'Eligible' ? (
                    <button className='btn btn-success w-90  mb-2' onClick={handleRedirectToHoliday}>Apply for Holiday Package</button>
                ) : (
                    <button className='btn btn-success w-90  mb-2' onClick={handleSendTextMessage}>Send Text Message</button>
                )}
            </div>
        </div>
        </div>
    );
};

export default IncentiveForm;
