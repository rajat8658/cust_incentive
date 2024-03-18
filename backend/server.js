const express = require('express');
const dbConfig=require('./config/database')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const holidayPackageRoutes = require('./routes/holidayPackageRoutes');
const incentiveRoutes = require('./routes/incentiveRoutes');
const salesRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes')
const notificationRoutes = require('./routes/notificationRoutes');

const holidayController = require('./controllers/holidayController');

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}



const app = express();

app.use(express.json());
app.use(cookieParser());
// const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/holiday-packages', holidayPackageRoutes);
app.use('/api/incentives', incentiveRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('api/holiday_packages',holidayController);

// Start the server
app.listen(process.env.PORT, ()=>{
  console.log(`server is running on ${process.env.PORT}`);
});
