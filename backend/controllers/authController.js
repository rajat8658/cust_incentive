// server/controllers/authController.js

const bcrypt = require('bcrypt');
const db = require('../config/database');

// Register a new user
exports.register= async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [req.body.email,req.body.password], async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert new user into the database
      const insertQuery = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
      db.query(insertQuery, [username, email, hashedPassword, role], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Server error' });
        }

        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
}


// Login a user
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const sql = 'SELECT * FROM users WHERE email = ? AND password= ?';
  db.query(sql, [req.body.email,req.body.password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    else{
      const email=results[0].email;
      
    }

    const user = results[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!result) {
        return res.status(401).json({ message: 'Email or password is incorrect' });
      }

      // Passwords match, user is authenticated
      // Here you can generate a JWT token or manage session
      res.status(200).json({ message: 'Login successful' });
    });
  });
};
