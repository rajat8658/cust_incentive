// userController.js

const db = require('../config/database');

const UserController = {
  // Get all users
  getUsers: async (req, res) => {
    try {
      const [users] = await db.query('SELECT * FROM users');
      res.json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const { username, email } = req.body;
    try {
      await db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Update user by ID
  updateUserById: async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    try {
      await db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Delete user by ID
  deleteUserById: async (req, res) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM users WHERE id = ?', [id]);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
};

module.exports = UserController;
