import diaryData from '../../data/diaries.json';
import { DiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary
};