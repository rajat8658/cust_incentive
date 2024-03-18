// userRoute.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET /api/users - Get all users
router.get('/', UserController.getUsers);

// POST /api/users - Create a new user
router.post('/', UserController.createUser);

// GET /api/users/:id - Get user by ID
router.get('/:id', UserController.getUserById);

// PUT /api/users/:id - Update user by ID
router.put('/:id', UserController.updateUserById);

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', UserController.deleteUserById);

module.exports = router;
