// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer   text-align-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Rajat@Custom_Incentive. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
