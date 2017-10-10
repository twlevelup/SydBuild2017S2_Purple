import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConfigForm from './ConfigForm';

const mockSubmit = jest.fn();
const store = configureMockStore()({});
const setStore = (newStore) => {
  return mount(
    <Provider store={ newStore }>
      <ConfigForm handleSubmit={ mockSubmit } />
    </Provider>
  );
};

describe('ConfigForm', () => {
  let wrappedApp;
  beforeEach(() => {
    wrappedApp = setStore(store);
  });

  test('it should display ConfigForm', () => {
    const result = wrappedApp.find('h2');
    expect(result).toHaveText('ConfigForm');
  });

  test('it should display time dropdown menu', () => {
    expect(wrappedApp.find('#dropdown-menu')).toBeDefined();
  });
  test('clicking submit button should call this.onSubmit', () => {
    const dropdown = wrappedApp.find('#dropdown-menu');
    dropdown.simulate('submit');
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  test('it should display time hours', () => {
    expect(wrappedApp.find('#hours')).toBeDefined();
  });

  test('it should display time minutes', () => {
    expect(wrappedApp.find('#minutes')).toBeDefined();
  });

  test('it should have a submit notification button', () => {
    expect(wrappedApp.find('.submit-btn')).toBePresent();
  });

  test('it should display color picker title', () => {
    const result = wrappedApp.find('h4').at(0);
    expect(result).toHaveText('color picker');
  });

  test('it should display font size title', () => {
    const result = wrappedApp.find('h4').at(1);
    expect(result).toHaveText('font size');
  });

  test('it should display color picker', () => {
    expect(wrappedApp.find('input[type="color"]')).toBeDefined();
  });

  test('it should display font size picker', () => {
    expect(wrappedApp.find('input[type="range"]')).toBeDefined();
  });
});
