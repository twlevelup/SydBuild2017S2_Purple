import React from 'react';
import { shallow } from 'enzyme';
import { NotificationScreenComponent, NotificationScreenButtons, NotificationBox } from './NotificationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<NotificationScreenComponent />', () => {
  let originalDateNow = Date.now;

  const defaultNotifications = [{
    'description': 'Test Notification',
    'dateTime': {
      'year': 2017,
      'month': 10,
      'day': 7,
      'hour': 19,
      'minute': 35,
    },
  }];

  function composeComponent(notifications) {
    return shallow(<NotificationScreenComponent notifications={ notifications } />);
  }

  function mockDateNow() {
    // Mock the date now function before each test
    // 19:35 7 Oct 2017
    // return 1507365290;
    return '7 Nov 2017 20:34:00 +1200';
  }

  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    originalDateNow = Date.now;
    Date.now = mockDateNow;
  });

  afterEach(() => {
    Date.now = originalDateNow; // Set date function back to normal
  });

  describe('Show child component', () => {
    it('renders child component when it should', () => {
      const notifications = [{
        'description': 'Dummy',
        'dateTime': {
          'year': 2017,
          'month': 10,
          'day': 7,
          'hour': 19,
          'minute': 34,
        },
      }];

      const component = composeComponent(notifications);
      expect(component.find('#Notification-Screen')).toHaveLength(1);
      expect(component.children().find('NotificationBox')).toHaveLength(1);
    });

    it('does not render a component when the times passed are different', () => {
      const differentTimeNotification = [{
        'description': 'Dummy',
        'dateTime': {
          'year': 2016,
          'month': 10,
          'day': 7,
          'hour': 18,
          'minute': 34,
        },
      }];
      const component = composeComponent(differentTimeNotification);
      expect(component.children().find('NotificationBox')).toHaveLength(0);
    });
  });

  describe('NotificationBox', () => {
    it('Should have some props', () => {
      const wrapper = shallow(<NotificationBox text='test' date='now' onClick={ jest.fn() } />);
      expect(wrapper).toContainReact(<p id='textLine'>test</p>);
      expect(wrapper).toContainReact(<p id='dateLine'>now</p>);
      expect(wrapper.find('#Dismiss-Button')).toBePresent();
    });
  });

  describe('NotificationScreenButtons', () => {
    test('it should have a RIGHT button config of going to home page', () => {
      NotificationScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a LEFT button config of doing nothing', () => {
      NotificationScreenButtons.LEFT();
      expect(ButtonAction.doNothing);
    });

    test('it should have a DOWN button config of doing nothing', () => {
      NotificationScreenButtons.DOWN();
      expect(ButtonAction.doNothing);
    });

    test('it should have a TOP button config of doing nothing', () => {
      NotificationScreenButtons.TOP();
      expect(ButtonAction.doNothing);
    });
  });

  describe('NotificationScreenComponent.prototype.getToday', () => {
    it('should use the getToday function for dates', () => {
      const component = composeComponent(defaultNotifications);
      expect(component.instance().getToday()).toBe('7 Nov 2017 20:34:00 +1200');
    });
  });


  describe('checkNotification states', () => {
    test('should not register input that is not a list of notifications', () => {
      const notifications = [{
        'a': 'INVALID',
        'b': 'INVALID',
      }];

      const component = composeComponent(notifications);
      expect(component.state().notificationTimes).toHaveLength(0);
    });
  });

  describe('test handle dismiss', () => {
    const component = composeComponent(defaultNotifications);
    component.instance().handleDismiss();
    expect(component.state().shouldDisplayNotification).toBeFalsy();
  });

  describe('NotificationScreenComponent.prototype.parseNotifications', () => {
    it('returns list of dates when passing in notifications', () => {
      const notifications = [
        {
          'description': 'Notification 1',
          'dateTime': {
            'year': 2000,
            'month': 1,
            'day': 1,
            'hour': 0,
            'minute': 0,
          },
        },
        {
          'description': 'Notification 2',
          'dateTime': {
            'year': 2017,
            'month': 1,
            'day': 1,
            'hour': 1,
            'minute': 1,
          },
        },
        {
          'a': 'INVALID',
          'b': 'INVALID',
        },
      ];
      const component = composeComponent(notifications);
      const notificationOne = component.instance().parseNotifications(notifications)[0];
      const notificationTwo = component.instance().parseNotifications(notifications)[1];
      const notificationThree = component.instance().parseNotifications(notifications)[2];

      expect(notificationOne.getFullYear()).toBe(2000);
      expect(notificationOne.getMonth()).toBe(1);
      expect(notificationOne.getDay()).toBe(2);
      expect(notificationTwo.getHours()).toBe(1);
      expect(notificationTwo.getMinutes()).toBe(1);
      expect(notificationThree).toBeUndefined();
    });

    it('returns an empty array when no notificcations passed in', () => {
      const component = composeComponent(defaultNotifications);
      const notifications = component.instance().parseNotifications(undefined);
      expect(notifications).toHaveLength(0);
    });
  });
});
