// userService.js

const pool = require('../config/database');

const UserService = {
  // Register a new user
  register: async ({ username, email, password }) => {
    try {
      // Check if the user already exists
      const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (existingUser.length > 0) {
        throw new Error('User already exists');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async ({ email, password }) => {
    try {
      // Check if the user exists
      const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (user.length === 0) {
        throw new Error('Invalid credentials');
      }

      // Verify password
      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      return user[0];
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UserService;
