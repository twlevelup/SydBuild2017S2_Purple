import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import { getMood } from './MoodGetter';

global.window = {};
window.localStorage = global.localStorage;
describe('moodLocation ', () => {
  test('if localstorage is empty then location 0 0 is returned', () => {
    window.localStorage.setItem('moodList', JSON.stringify([]));
    expect(getMood().mood).toEqual('idk');
  });
});
/*
describe('getLocation ', () => {
  test('if localstorage is not empty then last index is returned', () => {
    window.localStorage.setItem('moodList', JSON.stringify([1, 2]));
    expect(getMood()).toEqual('idk');
  });
});
*/
