// holidayPackageController.js

const db = require('../config/database');

const HolidayPackageController = {
  // Get all holiday packages
  getHolidayPackages: async (req, res) => {
    try {
      db.query('SELECT * FROM holiday_packages', (err, results) => {
        if (err) {
          console.error('Error retrieving holiday packages: ' + err.message);
          res.status(500).send('Server error');
          return;
        }
        res.json(results);
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Create a new holiday package
  createHolidayPackage: async (req, res) => {
    const { holidayName, durationNights, destination, location, amenities } = req.body;
    if (!holidayName || !durationNights || !destination || !location || !amenities) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      await db.query('INSERT INTO holiday_packages (holiday_name, duration_nights, destination, location, amenities) VALUES (?, ?, ?, ?, ?)',
        [holidayName, durationNights, destination, location, amenities]);
      res.json({ message: 'Holiday package created successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Get holiday package by ID
  getHolidayPackageById: async (req, res) => {
    const { id } = req.params;
    try {
      db.query('SELECT * FROM holiday_packages WHERE id = ?', [id], (err, results) => {
        if (err) {
          console.error('Error retrieving holiday package: ' + err.message);
          res.status(500).send('Server error');
          return;
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Holiday package not found' });
        }
        res.json(results[0]);
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Update holiday package by ID
  updateHolidayPackageById: async (req, res) => {
    const { id } = req.params;
    const { holidayName, durationNights, destination, location, amenities } = req.body;
    try {
      db.query('UPDATE holiday_packages SET holiday_name = ?, duration_nights = ?, destination = ?, location = ?, amenities = ? WHERE id = ?',
        [holidayName, durationNights, destination, location, amenities, id], (err) => {
          if (err) {
            console.error('Error updating holiday package: ' + err.message);
            res.status(500).send('Server error');
            return;
          }
          res.json({ message: 'Holiday package updated successfully' });
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },

  // Delete holiday package by ID
  deleteHolidayPackageById: async (req, res) => {
    const { id } = req.params;
    try {
      db.query('DELETE FROM holiday_packages WHERE id = ?', [id], (err) => {
        if (err) {
          console.error('Error deleting holiday package: ' + err.message);
          res.status(500).send('Server error');
          return;
        }
        res.json({ message: 'Holiday package deleted successfully' });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
};

module.exports = HolidayPackageController;
