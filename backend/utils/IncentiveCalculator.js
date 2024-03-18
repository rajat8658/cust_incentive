// utils/IncentiveCalculator.js

const calculateIncentive = (sales) => {
    let incentive = 0;
    let bonus = 0;
    let holidayPackageEligibility = false;

    if (sales >= 10000 && sales < 20000) {
        incentive = sales * 0.015;
    } else if (sales >= 20000 && sales < 30000) {
        incentive = sales * 0.03;
    } else if (sales >= 30000 && sales < 50000) {
        incentive = sales * 0.035;
        bonus = 1000;
    } else if (sales >= 50000) {
        incentive = sales * 0.05;
        holidayPackageEligibility = true;
    }

    return {
        incentive,
        bonus,
        holidayPackageEligibility
    };
};

module.exports = { calculateIncentive };
