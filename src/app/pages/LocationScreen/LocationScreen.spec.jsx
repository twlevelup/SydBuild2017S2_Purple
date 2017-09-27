import React from 'react';
import { shallow } from 'enzyme';
import { LocationScreenComponent, LocationScreenButtons } from './LocationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import Time from '../../../framework/components/Time/Time';
// import localStorage from 'mock-local-storage';
// global.window = {};
// window.localStorage = global.localStorage;
jest.mock('../../../framework/util/ButtonAction');

describe('<LocationScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<LocationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should have text stating that this screen sends location', () => {
    expect(componentWrapper.find('.title')).toHaveText('Tap screen to send your location to carer');
  });

  test('it should have Time  component', () => {
    expect(componentWrapper).toContainReact(<Time />);
  });

  describe('LocationScreenButtons', () => {
    test('it should have a MIDDLE button config of going to Home Page', () => {
      LocationScreenButtons.SCREEN();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });
  /*
  describe('LocationScreenButtons', () => {
    test('it should have a MIDDLE button config which calls sendLocation', () => {
      const sendLocation = jest.fn();
      LocationScreenButtons.SCREEN();
      expect(sendLocation).toHaveBeenCalled();
    });
  });
  */
});
