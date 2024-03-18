// adminRouter.js
const express = require('express');
const router = express.Router();
// const { adminAuth } = require('../middlewares/adminAuth');
const { getAllUsers, getUserById, deleteUserById } = require('../controllers/adminController');

// Middleware to protect routes - only accessible to admins
// router.use(adminAuth);

// Routes for admin operations
router.get('/users', getAllUsers); // Get all users
router.get('/users/:id', getUserById); // Get user by ID
router.delete('/users/:id', deleteUserById); // Delete user by ID

module.exports = router;
