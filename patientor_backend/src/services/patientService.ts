
import { DiagnosisEntry } from './../types';
import diagnoses from '../../data/diagnoses';

const getDiagnoses = (): DiagnosisEntry[] => {
  return diagnoses;
};

export default getDiagnoses;