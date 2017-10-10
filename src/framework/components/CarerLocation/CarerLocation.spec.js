import React from 'react';
import { mount } from 'enzyme';
import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import CarerLocation from './CarerLocation';

describe('CarerLocation', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.useFakeTimers();
    componentWrapper = mount(<CarerLocation />);
  });
  test('carer location box exists', () => {
    expect(componentWrapper.find('.carer-location-screen')).toBePresent();
  });

  test('it should call setInterval', () => {
    expect(setInterval.mock.calls.length).toBe(1);
  });
  test('it should call set state location on timeout', () => {
    jest.runOnlyPendingTimers();
    expect(componentWrapper.state().location).not.toBe(null);
  });
});
