export const getMood = () => {
  const moods = JSON.parse(localStorage.getItem('moodList'));
  if (!Array.isArray(moods) || moods.length <= 0) {
    return {
      time: Date.now(),
      mood: 'idk',
    };
  }
  return moods[moods.length - 1];
};
