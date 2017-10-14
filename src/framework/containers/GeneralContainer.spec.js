import React from 'react';
import { mount } from 'enzyme';
import { GeneralContainer } from './GeneralContainer';
import ConfigForm from '../components/ConfigForm/ConfigForm';

const state = { config: { color: '#000000' }, generalStore: { notification: { } } };

describe('GeneralContainer', () => {
  const updateStore = jest.fn();
  let generalStoreWrapper;

  beforeEach(() => {
    generalStoreWrapper = mount(
      <GeneralContainer WrappedComponent={ ConfigForm } appStore={ state } updateStore={ updateStore } />);
  });

  it('should pass the props to the wrapped component', () => {
    expect(generalStoreWrapper.find('ConfigForm')).toHaveProp('appStore', state);
    expect(generalStoreWrapper.find('ConfigForm')).toHaveProp('updateStore', updateStore);
  });
});
