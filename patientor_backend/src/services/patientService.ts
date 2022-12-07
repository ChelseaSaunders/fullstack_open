
import { DiagnosisEntry, PaientEntry } from './../types';
import diagnoses from '../../data/diagnoses';
import patients from '../../data/patients';

export const getDiagnoses = (): DiagnosisEntry[] => {
  return diagnoses;
};

export const getPatients = (): PaientEntry[] => {
  return patients;
};
