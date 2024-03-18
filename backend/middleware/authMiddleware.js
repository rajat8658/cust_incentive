// authMiddleware.js

const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const pool = require('../config/database');

const verifyToken = async (req, res, next) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization token is missing' });
    }

    // Verify JWT token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user exists in database
    const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [decoded.id]);
    if (!user) {
      return res.status(401).json({ message: 'Invalid authorization token' });
    }

    // Attach user object to request for further processing
    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: 'Invalid authorization token' });
  }
};

module.exports = { verifyToken };
