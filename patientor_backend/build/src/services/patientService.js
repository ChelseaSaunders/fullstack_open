"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatients = exports.getDiagnoses = void 0;
const diagnoses_1 = __importDefault(require("../../data/diagnoses"));
const patients_1 = __importDefault(require("../../data/patients"));
const getDiagnoses = () => {
    return diagnoses_1.default;
};
exports.getDiagnoses = getDiagnoses;
const getPatients = () => {
    return patients_1.default;
};
exports.getPatients = getPatients;
