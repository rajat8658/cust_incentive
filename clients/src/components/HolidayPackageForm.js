import React, { useState } from 'react';
import api from '../services/api';
import {Link} from 'react-router-dom'

const HolidayPackageForm = ({ packageId, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    holidayName: '',
    durationNights: '',
    destination: '',
    location: '',
    amenities: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (packageId) {
        // Update existing holiday package
        await api.put(`http://localhost:8080/api/holiday-packages/${packageId}`, formData);
      } else {
        // Create new holiday package
        await api.post('http://localhost:8080/api/holiday-packages', formData);
      }
      onSubmitSuccess();
    } catch (error) {
      console.log('Error submitting holiday package:', error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
    <div className='p-3 rounded w-25 border registerForm'>
      <h2>{packageId ? 'Edit Holiday Package' : 'Add Holiday Package'}</h2>
      <form onSubmit={handleSubmit}>
        <div mb-3>
          <label htmlFor="holidayName">Holiday Name:</label>
          <input
            type="text"
            id="holidayName"
            name="holidayName"
            value={formData.holidayName}
            onChange={handleChange}
            required
            className='form-control rounded-0'
          />
        </div>
        <div mb-3>
          <label htmlFor="durationNights">Duration (Nights):</label>
          <input
            type="number"
            id="durationNights"
            name="durationNights"
            value={formData.durationNights}
            onChange={handleChange}
            required
            className='form-control rounded-0'
          />
        </div>
        <div mb-3 >
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className='form-control rounded-0'
          />
        </div>
        <div mb-3>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className='form-control rounded-0'
          />
        </div>
        <div mb-4>
          <label htmlFor="amenities">Amenities:</label>
          <textarea
            id="amenities"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className='form-control rounded-0'          />
        </div>
        <button className='btn btn-success w-90 rounded-0 mb-2' type="submit">{packageId ? 'Update' : 'Add'} Holiday Package</button>
      </form>
      <p>
        Get all Users Details <Link to="/admin">Click here</Link>
      </p>

      
    </div>
    </div>
  );
};

export default HolidayPackageForm;
