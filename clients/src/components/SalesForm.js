import React, { useState } from 'react';
import api from '../services/api';

const SalesForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to submit sales data
      await api.post('http://localhost:8080/api/sales', { amount: parseInt(amount) });
      // Redirect to sales page or any other page as needed
      window.location.href = '/sales';
    } catch (error) {
      console.error('Error submitting sales data:', error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div>
      <h2>Sales Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SalesForm;
