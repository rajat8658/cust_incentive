// ParentComponent.js

import React, { useState } from 'react';
import HolidayPackageForm from './HolidayPackageForm';

const ParentComponent = () => {
  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Create Holiday Package</h1>
      <HolidayPackageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ParentComponent;
