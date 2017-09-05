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

  test('it should have a LEFT button config of going to News Page', () => {
    HomeScreenButtons.LEFT();
<<<<<<< HEAD
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/news');
=======
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/new');
>>>>>>> [first page][jae-hee/hossein] check-in dance initial commit
  });

  test('it should have a RIGHT button config of going to contactList page', () => {
    HomeScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    HomeScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of scrolling page down', () => {
    HomeScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
});

