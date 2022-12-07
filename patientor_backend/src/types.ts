export interface DiagnosisEntry {
  code: string
  name: string
  latin?: string
};

export interface PaientEntry {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: string
  occupation: string
};