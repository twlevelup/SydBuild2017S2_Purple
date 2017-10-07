import React from 'react';
import { shallow } from 'enzyme';
import { NotificationScreenComponent, NotificationScreenButtons } from './NotificationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';


jest.mock('../../../framework/util/ButtonAction');

describe('<NotificationScreenComponent />', () => {
  let originalDateNow = Date.now;

  function composeComponent(currentDateTime, notificationDateTime, notifications) {
    return shallow(<NotificationScreenComponent
      currentDateTime={ currentDateTime }
      notificationDateTime={ notificationDateTime }
      notifications={ notifications }
    />);
  }

  function mockDateNow() {
    // 19:35 7 Oct 2017
    return 1507365290;
  }

  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    originalDateNow = Date.now;
    Date.now = mockDateNow;
  });

  afterEach(() => {
    Date.now = originalDateNow;
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
      const component = composeComponent(undefined, new Date(Date.now()), undefined);
      expect(component.instance().getToday()).toBe(1507365290);
      expect(component.find('.currentTime')).toHaveText('Time: 2017');
    });
  });

  describe('NotificationScreenComponent.prototype.validateCurrentDateTime', () => {
    it('should return the passed parameter back if it is existing', () => {
      const expectedDateTime = new Date(2000, 1, 1, 1, 1, 0);

      const component = composeComponent(undefined, new Date(Date.now()), undefined);

      expect(component.instance().validateCurrentDateTime(expectedDateTime).getTime())
      .toBe(expectedDateTime.getTime());
    });

    it('should return the current date if it input is undefined', () => {
      const component = composeComponent(undefined, new Date(Date.now()), undefined);

      expect(component.instance().validateCurrentDateTime(undefined))
      .toBe(new Date(Date.now()).getTime());
    });
  });

  describe('check currentDateTime state', () => {
    it('should default to currentDateTime if we did not pass in props', () => {
      const component = composeComponent(undefined, new Date(Date.now()), undefined);
      const foundDateTime = component.state().currentDateTime;

      expect(foundDateTime.getFullYear()).toBe(2017);
    });

    it('should display a paragraph with the current date that is passed in', () => {
      const expectedDateTime = new Date(2000, 1, 1, 1, 1, 0);
      const component = composeComponent(expectedDateTime, new Date(Date.now()), undefined);

      expect(component.find('.currentTime')).toBePresent();
      expect(component.state().currentDateTime.getTime()).toBe(expectedDateTime.getTime());
    });
  });

  describe('checkNotification states', () => {
    test('should have a notification if one is passed in to the component', () => {
      const expectedDateTime = new Date(2017, 9, 4, 19, 59, 0);
      const notifications = [{
        'description': 'Notification 1',
        'dateTime': {
          'year': 2017,
          'month': 9,
          'day': 4,
          'hour': 19,
          'minute': 59,
        },
      }];
      const component = composeComponent(undefined, new Date(Date.now()), notifications);
      const foundDate = component.state().notificationTimes[0];
      const foundDateString = foundDate.toString();


      expect(foundDateString).toBe(expectedDateTime.toString());
      expect(foundDate.getHours()).toBe(19);
      expect(foundDate.getMinutes()).toBe(59);
    });

    test('should not register input that is not a list of notifications', () => {
      const notifications = [{
        'a': 'INVALID',
        'b': 'INVALID',
      }];

      const component = composeComponent(undefined, new Date(Date.now()), notifications);
      expect(component.state().notificationTimes[0]).toBeUndefined();
    });
  });

  describe('NotificationScreenComponent.prototype.parseNotifications', () => {
    it('returns undefined when input is invalid format', () => {
      const notifications = [{
        'a': 'INVALID',
        'b': 'INVALID',
      }];
      const component = composeComponent(undefined, new Date(Date.now()), notifications);
      expect(component.instance().parseNotifications(notifications)[0]).toBeUndefined();
    });

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
      const component = composeComponent(undefined, new Date(Date.now()), notifications);
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

    it('return undefined when the input is undefined', () => {
      const component = composeComponent(undefined, new Date(Date.now()), undefined);
      expect(component.instance().parseNotifications(undefined)).toBeUndefined();
    });
  });

  describe('checkNotifications', () => {
    test('it should show notification if current time is the notification time', () => {
      const currentDateTime = new Date(2017, 9, 25, 9, 0, 0);
      const notificationDateTime = new Date(2017, 9, 25, 9, 0, 0);
      const component = composeComponent(currentDateTime, notificationDateTime, undefined);

      expect(component.find('#Notification-container').length).toBe(1);
    });

    test('it should not show notification if current time differs from the notification time', () => {
      const currentDateTime = new Date(2017, 9, 25, 9, 0, 0);
      const notificationDateTime = new Date(2017, 9, 25, 9, 1, 0);
      const component = composeComponent(currentDateTime, notificationDateTime, undefined);
      expect(component.find('#Notification-container').length).toBe(0);
    });
  });
});
