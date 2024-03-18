const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all holiday packages
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM holiday_packages');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a holiday package



// Delete a holiday package
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM holiday_packages WHERE id = ?', [req.params.id]);
        res.json({ message: 'Deleted holiday package' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
