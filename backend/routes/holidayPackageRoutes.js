// holidayPackageRoutes.js

const express = require('express');
const router = express.Router();
const HolidayPackageController = require('../controllers/holidayPackageController');

// GET /api/holiday-packages - Get all holiday packages
router.get('/', HolidayPackageController.getHolidayPackages);

// POST /api/holiday-packages - Create a new holiday package
router.post('/', HolidayPackageController.createHolidayPackage);

// GET /api/holiday-packages/:id - Get holiday package by ID
router.get('/:id', HolidayPackageController.getHolidayPackageById);

// PUT /api/holiday-packages/:id - Update holiday package by ID
router.put('/:id', HolidayPackageController.updateHolidayPackageById);

// DELETE /api/holiday-packages/:id - Delete holiday package by ID
router.delete('/:id', HolidayPackageController.deleteHolidayPackageById);

module.exports = router;
