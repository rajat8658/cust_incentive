// incentiveRoute.js

const express = require('express');
const router = express.Router();
const IncentiveController = require('../controllers/incentiveController');

// POST /api/calculate-incentive - Calculate incentive based on sales
router.post('/calculate-incentive', IncentiveController.calculateIncentive);

module.exports = router;
