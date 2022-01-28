const { calculateBMIandRiskCategory } = require('../app');

test('calculates bmi,risk and category for normal values', () => {
  expect(JSON.stringify(calculateBMIandRiskCategory(75, 180))).toBe(
    JSON.stringify({
      bmi: '23.15',
      risk: 'Low risk',
      category: 'Normal weight'
    })
  );
});

test('calculates bmi,risk and category for invalid values', () => {
  expect(JSON.stringify(calculateBMIandRiskCategory(0, 0))).toBe(
    JSON.stringify({
      bmi: 'Invalid BMI',
      risk: 'Invalid Risk',
      category: 'Invalid Category'
    })
  );
});
