// salesController.js

// const Sale = require('../models/Sale'); // Import the Sale model

// Controller functions
const SalesController = {
  // Get all sales
  getSales: async (req, res) => {
    try {
      const sales = await Sale.find();
      res.json(sales);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new sale
  createSale: async (req, res) => {
    const { amount, product } = req.body;
    try {
      const newSale = new Sale({ amount, product });
      await newSale.save();
      res.status(201).json(newSale);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get sale by ID
  getSaleById: async (req, res) => {
    const saleId = req.params.id;
    try {
      const sale = await Sale.findById(saleId);
      if (!sale) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      res.json(sale);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update sale by ID
  updateSaleById: async (req, res) => {
    const saleId = req.params.id;
    const { amount, product } = req.body;
    try {
      const updatedSale = await Sale.findByIdAndUpdate(saleId, { amount, product }, { new: true });
      if (!updatedSale) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      res.json(updatedSale);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete sale by ID
  deleteSaleById: async (req, res) => {
    const saleId = req.params.id;
    try {
      const deletedSale = await Sale.findByIdAndDelete(saleId);
      if (!deletedSale) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      res.json({ message: 'Sale deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = SalesController;
