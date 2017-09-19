import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreenComponent, HomeScreenButtons } from './HomeScreen';
import Date from '../../../framework/components/Date/Date';
import Time from '../../../framework/components/Time/Time';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('HomeScreenComponent component', () => {
  let homeScreenComponent;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage', 'scrollUp', 'scrollDown');
    homeScreenComponent = shallow(<HomeScreenComponent />);
  });
  test('it should have Date component', () => {
    expect(homeScreenComponent).toContainReact(<Time />);
  });

  test('it should have Time component', () => {
    expect(homeScreenComponent).toContainReact(<Date />);
  });

  test('it should have some content', () => {
    expect(homeScreenComponent.find('#home-page-content')).toBePresent();
  });

  test('it should have a LEFT button config of going to Notification Page', () => {
    HomeScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/notification');
  });

  test('it should have a RIGHT button config of going to education page', () => {
    HomeScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/education');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    HomeScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button which will go to the mood page', () => {
    HomeScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/mood');
  });
});
