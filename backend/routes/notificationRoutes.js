// notificationRouter.js

const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

// Route to send notification email
router.post('/send-email', NotificationController.sendNotificationEmail);

module.exports = router;
