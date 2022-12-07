"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const patientService_1 = require("./services/patientService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const PORT = 3001;
app.get('/api/ping', (_req, res) => {
    res.send('pong');
});
app.get('/api/diagnoses', (_req, res) => {
    res.send((0, patientService_1.getDiagnoses)());
});
app.get('/api/patients', (_req, res) => {
    res.send((0, patientService_1.getPatients)());
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
