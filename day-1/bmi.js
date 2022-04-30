// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

// BMI = kg/m2

const readline = require('readline-sync');
const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionInt('Qual sua altura? ');

function calculateBMI(weight, height) {
  const bmi = (weight/ Math.pow(height/ 100,2)).toFixed(2);
  console.log(bmi);
};

calculateBMI(weight, height);