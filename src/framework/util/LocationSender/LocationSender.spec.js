import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import sendLocation from './LocationSender';

describe('SendPosition ', () => {
  test('it should call JSON.stringify and JSON.parse', () => {
    const mockGeolocation = {
      getCurrentPosition: func => func({
        coords: {
          latitude: 100,
          longitude: 100,
        },
      }),
    };
    global.navigator.geolocation = mockGeolocation;
    JSON.stringify = jest.fn();
    JSON.parse = jest.fn();
    sendLocation();
    expect(JSON.stringify).toBeCalled();
    expect(JSON.parse).toBeCalled();
  });
});

describe('SendPosition ', () => {
  test('if getItem returns an array then its length is > 1 after modification', () => {
    const mockGeolocation = {
      getCurrentPosition: func => func({
        coords: {
          latitude: 100,
          longitude: 100,
        },
      }),
    };
    global.navigator.geolocation = mockGeolocation;
    JSON.parse = jest.fn(() => {
      return ['hi'];
    });
    JSON.stringify = jest.fn();
    sendLocation();
    expect(JSON.stringify.mock.calls[0][0].length).toBeGreaterThanOrEqual(2);
  });
});

describe('SendPosition ', () => {
  test('it should call geolocation.getcurrentposition', () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
    sendLocation();
    expect(navigator.geolocation.getCurrentPosition).toBeCalled();
  });
});
