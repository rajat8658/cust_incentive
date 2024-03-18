import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const HolidayPackageList = () => {
  const [holidayPackages, setHolidayPackages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch holiday packages from the backend
    const fetchHolidayPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/holiday-packages');
        setHolidayPackages(response.data);
      } catch (error) {
        console.error('Error fetching holiday packages:', error);
      }
    };

    fetchHolidayPackages();
  }, []);

  const handleConfirm = () => {
    // Code to handle confirmation logic
    // For now, just set the success message and clear it after a few seconds
    setSuccessMessage('Confirmation successful. Redirecting to home screen...');
    setTimeout(() => {
        swal('Congratulations','Your holiday package confirmed successfully','success').then(result=>{
            window.location.href='/'
  
          })
    }, 3000); // 3 seconds
  };

  return (
    <div>
      <h2>Holiday Packages</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
      <div>
      
        {(holidayPackages.map(holidayPackage => { 
            return <div className='bs adminForm'>
            
            <h3>{holidayPackage.holiday_name}</h3><br/>
            <div className='bs mb-3'>
            <p>Destination: {holidayPackage.destination}</p>
            <p>Duration: {holidayPackage.duration_nights}</p>
            <p>Location: {holidayPackage.location}</p>
            <p>Amenities: {holidayPackage.amenities}</p>
            </div>
            <button  className='btn btn-success w-90 rounded-0 mb-2' onClick={handleConfirm}>Confirm</button>
            </div>
        }
        ))}
      
      </div>
      </div>
    </div>
    </div>
  );
};

export default HolidayPackageList;
