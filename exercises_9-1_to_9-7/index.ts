import express = require('express');
import calculateBMI from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  const query = req.query;
  const height = Number(query.height);
  const weight = Number(query.weight);
  const bmi = calculateBMI(height, weight);
  const responseData = {
    weight: weight,
    height: height,
    bmi: bmi
  }

  if (isNaN(weight) || isNaN(height)) {
    const error = {
      error: "malformed parameters",
    }
    res.send(JSON.stringify(error));
  }

  res.send(JSON.stringify(responseData))
})

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});