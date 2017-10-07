import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  const defaultProps = {
    description: 'Test',
    dateTime: { year: 2017, month: 9, day: 4, hour: 19, minute: 59 },
  };

  const composeComponent = (props = {}) =>
    shallow(<Notification { ...defaultProps } { ...props } />);

  // test('It displays description and dateTime', () => {
  //   const notifications = [
  //     {
  //       description: 'notification one',
  //       dateTime: { year: 2017, month: 9, day: 4, hour: 19, minute: 59 }
  //     },
  //     {
  //       description: 'notification two',
  //       dateTime: { year: 2017, month: 9, day: 4, hour: 19, minute: 59 }
  //     },
  //   ];
  //   notifications.forEach((notification) => {
  //     const component = composeComponent(notification);
  //     const dateTimeString = notification.dateTime.year + '-'
  //       + notification.dateTime.month + '-'
  //       + notification.dateTime.day + ' '
  //       + notification.dateTime.hour + ':'
  //       + notification.dateTime.minutes;
  //     console.log(dateTimeString);
  //     expect(component.find('.description').text()).toEqual(`Name: ${ notification.description }`);
  //     expect(component.find('.dateTime').text()).toEqual(`DateTime: ${ dateTimeString }`);
  //   });
  // });

  test('it should have className "notification"', () => {
    expect(composeComponent()).toHaveClassName('notification');
  });
});
