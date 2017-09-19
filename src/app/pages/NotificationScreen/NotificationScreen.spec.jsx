import React from 'react';
import { shallow } from 'enzyme';
import { NotificationScreenComponent, NotificationScreenButtons } from './NotificationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<NotificationScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<NotificationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the article publish date', () => {
    expect(componentWrapper.find('#publish-date')).toHaveText('Publish date: 23/05/1823');
  });

  it('should display (my first Notification article) by default', () => {
    expect(componentWrapper).toIncludeText('My first Notification article');
  });

  describe('NotificationScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      NotificationScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      NotificationScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      NotificationScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      NotificationScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });
  });
});
