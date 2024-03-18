const db = require('../config/database');

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json(results);
    });
  };
  
  // Get user by ID
  exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error fetching user by ID:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(results[0]);
    });
  };
  
  // Delete user by ID
  exports.deleteUserById = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (error) => {
      if (error) {
        console.error('Error deleting user by ID:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json({ message: 'User deleted successfully' });
    });
  };