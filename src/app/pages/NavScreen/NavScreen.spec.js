import React from 'react';
import { shallow } from 'enzyme';
import { NavScreenComponent, NavScreenButtons } from './NavScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

fdescribe('NavScreen component', () => {
  let defaultProps;
  beforeEach(() => {
    jest.resetAllMocks();

    defaultProps = {
      locations: [{ name: 'Home' }, { name: 'Work' }, { name: 'Doctor' }],
      selectedIndex: 0,
    };
  });


  it('should contain a ScrollList component', () => {
    const componentWrapper = shallow(<NavScreenComponent { ...defaultProps } />);
    expect(componentWrapper.find('ScrollList')).toBePresent();
  });

  describe('NavScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      NavScreenButtons(defaultProps).LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to home page', () => {
      NavScreenButtons(defaultProps).RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a TOP button the scrolls up', () => {
      NavScreenButtons(defaultProps).TOP();
      expect(ButtonAction.goToPage).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button to scroll down', () => {
      NavScreenButtons(defaultProps).BOTTOM();
      expect(ButtonAction.goToPage).toHaveBeenCalled();
    });

    test('it should have a SCREEN button to do nothing', () => {
      NavScreenButtons(defaultProps).SCREEN();
      expect(ButtonAction.doNothing).toHaveBeenCalled();
    });
  });

  it('should default the selectedIndex to 0', () => {
    NavScreenButtons({ locations: defaultProps.locations }).BOTTOM();

    expect(ButtonAction.goToPage).toHaveBeenCalledWith({
      state: { selectedIndex: 1 },
    });
  });

  describe('TOP button', () => {
    it('should set previous location', () => {
      NavScreenButtons({ ...defaultProps, selectedIndex: 2 }).TOP();

      expect(ButtonAction.goToPage).toHaveBeenCalledWith({
        state: { selectedIndex: 1 },
      });
    });
    it('should roll back to the bottom', () => {
      NavScreenButtons({ ...defaultProps, selectedIndex: 0 }).TOP();

      expect(ButtonAction.goToPage).toHaveBeenCalledWith({
        state: { selectedIndex: 2 },
      });
    });
  });
});
