
export const sendMood = (mood) => {
  let moods = JSON.parse(localStorage.getItem('moodList'));
  if (!Array.isArray(moods)) {
    moods = [];
  }
  moods.push(
    {
      time: Date.now(),
      mood,
    });
  localStorage.setItem('moodList', JSON.stringify(moods));
};
