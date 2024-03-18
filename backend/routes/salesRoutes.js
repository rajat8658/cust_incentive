// salesRoute.js

const express = require('express');
const router = express.Router();
const SalesController = require('../controllers/salesController');

// GET /api/sales - Get all sales
router.get('/', SalesController.getSales);

// POST /api/sales - Create a new sale
router.post('/', SalesController.createSale);

// GET /api/sales/:id - Get sale by ID
router.get('/:id', SalesController.getSaleById);

// PUT /api/sales/:id - Update sale by ID
router.put('/:id', SalesController.updateSaleById);

// DELETE /api/sales/:id - Delete sale by ID
router.delete('/:id', SalesController.deleteSaleById);

module.exports = router;
