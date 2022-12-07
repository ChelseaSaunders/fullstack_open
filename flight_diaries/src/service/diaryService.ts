import diaries from '../../data/diaries'

import { nonSensitiveDiaryEntry, DiaryEntry } from '../types'

const getEntries = () : DiaryEntry[] => {
  return diaries
}

const getNonSensitiveEntries = (): nonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => (
    {
      id,
      date,
      weather,
      visibility,
    }));
};
const addDiary = () => {
  return []
}

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary
}