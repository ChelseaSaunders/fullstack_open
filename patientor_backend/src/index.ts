import express from 'express';
const cors = require('cors');
import { getDiagnoses, getPatients } from './services/patientService';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.send(getDiagnoses());
});

app.get('/api/patients', (_req, res) => {
  res.send(getPatients());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});