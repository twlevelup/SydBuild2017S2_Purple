import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConfigForm from './ConfigForm';

const store = configureMockStore()({});
const setStore = (newStore) => {
  return mount(
    <Provider store={ newStore }>
      <ConfigForm />
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
});
