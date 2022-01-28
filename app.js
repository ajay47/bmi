const { SAMPLE_DATA } = require('./constants');

let OverweightCounter = 0;

const calculateBMIandRiskCategory = (weight, height) => {
  if (height <= 0 || weight <= 0) return { bmi: 'Invalid BMI', risk: 'Invalid Risk', category: 'Invalid Category' };

  const heightMeters = height / 100;

  const bmi = weight / (heightMeters * heightMeters);
  let risk = '';
  let category = '';

  switch (true) {
    case bmi <= 18.4:
      risk = 'Malnutrition risk';
      category = 'Underweight';
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      risk = 'Low risk';
      category = 'Normal weight';
      break;
    case bmi >= 25 && bmi <= 29.9:
      risk = 'Enhanced risk';
      category = 'Overweight';
      OverweightCounter++;
      break;
    case bmi >= 30 && bmi <= 34.9:
      risk = 'Medium risk';
      category = 'Moderately obese';
      break;
    case bmi >= 35 && bmi <= 39.9:
      risk = 'High';
      category = 'Severel obese';
      break;
    case bmi >= 40:
      risk = 'Very high risk ';
      category = 'Very severely obese';
  }

  return { bmi, risk, category };
};

const newBMITable = SAMPLE_DATA.map(sample => {
  const { bmi, risk, category } = calculateBMIandRiskCategory(sample.WeightKg, sample.HeightCm);

  return { ...sample, bmi, risk, category };
});

console.log(newBMITable, OverweightCounter);
