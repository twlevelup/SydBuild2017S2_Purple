import localStorage from 'mock-local-storage';
import getLocation from './LocationGetter';

global.window = {};
window.localStorage = global.localStorage;
describe('getLocation ', () => {
  test('if localstorage is empty then location 0 0 is returned', () => {
    window.localStorage.setItem('locationList', JSON.stringify([]));
    expect(getLocation().location).toEqual(
      {
        lat: 0,
        lng: 0,
      }
    );
  });
});

describe('getLocation ', () => {
  test('if localstorage is not empty then last index is returned', () => {
    window.localStorage.setItem('locationList', JSON.stringify([1, 2]));
    expect(getLocation()).toEqual(2);
  });
});
