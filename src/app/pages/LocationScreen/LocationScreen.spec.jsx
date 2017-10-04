import React from 'react';
import { mount } from 'enzyme';
import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import { LocationScreenComponent } from './LocationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import Time from '../../../framework/components/Time/Time';
// import localStorage from 'mock-local-storage';
// global.window = {};
// window.localStorage = global.localStorage;
jest.mock('../../../framework/util/ButtonAction');

describe('<LocationScreenComponent />', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(<LocationScreenComponent remapButtons={ onLoadRemapButtons } />);
    // jest.spyOn(ButtonAction, 'goToPage');
  });

  test('should have text stating that this screen sends location', () => {
    expect(componentWrapper.find('.title')).toHaveText('Tap screen to send your location to carer');
  });

  test('should call onLoadRemapButtons on componentDidMount', () => {
    expect(onLoadRemapButtons).toHaveBeenCalled();
  });
/*
  test('should call componentDidUpdate on setState', () => {
    componentWrapper.componentDidUpdate = jest.fn();
    console.log(componentWrapper);
    jest.spy(Foo.prototype, 'componentDidMount');
expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
    componentWrapper.setState({test:'hi'});
    expect(componentWrapper.componentDidUpdate).toHaveBeenCalled();
  });

*/

  test('it should have Time  component', () => {
    expect(componentWrapper).toContainReact(<Time />);
  });
  describe('LocationScreenButtons', () => {
    test('it should have a SCREEN button that when pressed displays latitude and longitude', () => {
      componentWrapper.setState({
        location: {
          lat: 1,
          lng: 1,
        },
        activeText: 'Location sent to carer!',
      });
      expect(componentWrapper.find('.title')).toHaveText('Location sent to carer!');
      expect(componentWrapper.find('.latitudeDisplay').text()).toMatch(/latitude = [0-9]+\.?[0-9]*/);
      expect(componentWrapper.find('.longitudeDisplay').text()).toMatch(/longitude = [0-9]+\.?[0-9]*/);
    });
  });
  describe('LocationScreenButtons', () => {
    test('it should have a BOTTOM button that when pressed will go back to home screen ', () => {
      componentWrapper.instance().buttonActions.BOTTOM();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });

  describe('LocationScreenButtons', () => {
    test('it should have a MIDDLE button config which calls sendLocation', () => {
      const mockGeolocation = {
        getCurrentPosition: func => func({
          coords: {
            latitude: 100,
            longitude: 100,
          },
        }),
      };
      global.navigator.geolocation = mockGeolocation;
      // console.log(componentWrapper.instance().buttonActions.SCREEN());
      expect.assertions(1);
      return componentWrapper.instance().buttonActions.SCREEN().then(() => {
        expect(componentWrapper.state().activeText).toEqual('Location sent to carer!');
      });
    });
  });
});
