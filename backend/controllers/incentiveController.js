// incentiveController.js

const { calculateIncentive } = require('../utils/IncentiveCalculator');

const IncentiveController = {
  calculateIncentive: async (req, res) => {
    const { sales } = req.body;

    try {
      // Calculate incentive details based on sales data
      const { incentive, bonus, holidayPackageEligibility } = calculateIncentive(sales);

      res.json({ incentive, bonus, holidayPackageEligibility });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
};

module.exports = IncentiveController;
