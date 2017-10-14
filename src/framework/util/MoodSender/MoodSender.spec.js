import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import { sendMood } from './MoodSender';

describe('SendMood ', () => {
  test('it should call JSON.stringify and JSON.parse', () => {
    JSON.stringify = jest.fn();
    JSON.parse = jest.fn();
    sendMood();
    expect(JSON.stringify).toBeCalled();
    expect(JSON.parse).toBeCalled();
  });
});

describe('SendPosition ', () => {
  test('if getItem returns an array then its length is > 1 after modification', () => {
    JSON.parse = jest.fn(() => {
      return ['hi'];
    });
    JSON.stringify = jest.fn();
    sendMood();
    expect(JSON.stringify.mock.calls[0][0].length).toBeGreaterThanOrEqual(2);
  });
});
