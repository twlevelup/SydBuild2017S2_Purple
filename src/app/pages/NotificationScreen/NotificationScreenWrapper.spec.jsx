import React from 'react';
import { mount } from 'enzyme';
import { NotificationScreen } from './NotificationScreenWrapper';

const notification = {
  description: 'Notifiaction 3',
  dateTime: {
    year: 2017,
    month: 9,
    day: 14,
    hour: 13,
    minute: 28,
  },
  color: '#ffffff',
  fontSize: 18,
  frequency: 'weekly',
};

describe('GeneralContainer', () => {
  let generalWrapper;

  beforeEach(() => {
    generalWrapper = mount(<NotificationScreen notification={ notification } />);
  });

  it('should pass notification to component', () => {
    expect(generalWrapper.find('NotificationScreenComponent')).toHaveProp('notifications', [notification]);
  });
});

