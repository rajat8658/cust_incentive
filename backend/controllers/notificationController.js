const nodemailer = require('nodemailer');
const db = require('../config/database'); // Assuming you have a database connection configured

// Function to send notification email
exports.sendNotificationEmail = async (req, res) => {
  const { message } = req.body;

  try {
    // Fetch recipient's email addresses from the database based on the role being 'employee'
    const query = 'SELECT email FROM users WHERE role = ?';
    const [employees] = await db.query(query, ['employee']);
    
    if (!employees || employees.length === 0) {
      return res.status(404).json({ error: 'Recipient emails not found' });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rajat11072000@gmail.com',
        pass: 'Rajat@1234'
      }
    });

    // Iterate over each employee and send email
    for (const employee of employees) {
      const mailOptions = {
        from: 'rajat11072000@gmail.com',
        to: employee.email,
        subject: 'Incentive Notification',
        text: message
      };

      // Send email for each employee
      await transporter.sendMail(mailOptions);
    }

    // Save notification details to the database
    // Code to save notification details to the database

    res.status(200).json({ message: 'Notification emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send notification emails' });
  }
};
