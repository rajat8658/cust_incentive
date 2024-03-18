CREATE DATABASE IF NOT EXISTS custom_incentive;

-- Use the database
USE custom_incentive;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'employee') DEFAULT 'employee'
);

-- Create the sales table
CREATE TABLE IF NOT EXISTS sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount INT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create the holiday_packages table
CREATE TABLE IF NOT EXISTS holiday_packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    holiday_name VARCHAR(255) UNIQUE NOT NULL,
    duration_nights INT NOT NULL,
    destination VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    amenities TEXT
);

-- Create the incentives table
CREATE TABLE IF NOT EXISTS incentives (
    id INT AUTO_INCREMENT PRIMARY KEY,
    target_sales INT NOT NULL,
    incentive_percentage DECIMAL(5,2) NOT NULL,
    bonus_amount INT,
    holiday_package_id INT,
    FOREIGN KEY (holiday_package_id) REFERENCES holiday_packages(id)
);

-- Create the notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipient_id INT NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY (recipient_id) REFERENCES users(id)
);

-- Example data for roles
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@example.com', 'password123', 'admin'),
('employee1', 'employee1@example.com', 'password123', 'employee'),
('employee2', 'employee2@example.com', 'password123', 'employee');


INSERT INTO holiday_packages (holiday_name, duration_nights, destination, location, amenities) VALUES
('Package 1', 7, 'Beach Resort', 'Maldives', 'Swimming pool, Spa, All meals included'),
('Package 2', 5, 'Mountain Lodge', 'Swiss Alps', 'Skiing, Hiking, Breakfast included');


INSERT INTO incentives (target_sales, incentive_percentage, bonus_amount, holiday_package_id) VALUES
(10000, 1.5, NULL, NULL),
(20000, 3, NULL, NULL),
(30000, 3.5, 1000, NULL),
(50000, 5, NULL, 1),
(100000, 7, NULL, 2);
