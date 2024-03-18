import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolidayAdmin = () => {
    const [holidayPackages, setHolidayPackages] = useState([]);

    useEffect(() => {
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

    

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/holiday-packages/${id}`);
            // Remove the holiday package locally if needed
        } catch (error) {
            console.error('Error deleting holiday package:', error);
        }
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <ul>
                {holidayPackages.map((holiday_package) => (
                    <li key={holiday_package.id}>
                        <p>{holiday_package.holiday_name}</p>
                        
                        <button onClick={() => handleDelete(holiday_package.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HolidayAdmin;
