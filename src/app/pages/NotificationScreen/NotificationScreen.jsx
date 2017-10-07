import React from 'react';
import PropTypes from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export class NotificationScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: this.validateCurrentDateTime(props.currentDateTime),
      notificationTimes: this.parseNotifications(props.notifications),
    };
  }

  getToday() {
    return Date.now();
  }

  validateCurrentDateTime(currentDateTime) {
    if (currentDateTime !== undefined) {
      return currentDateTime;
    }
    return this.getToday();
  }

  parseNotifications(notifications) {
    if (notifications !== undefined) {
      return notifications.map((n) => {
        if (n.dateTime !== undefined) {
          return new Date(
            n.dateTime.year,
            n.dateTime.month,
            n.dateTime.day,
            n.dateTime.hour,
            n.dateTime.minute
          );
        }
        return undefined;
      });
    }
    return undefined;
  }


  // componentDidMount() {
  //   setInterval(() => {
  //   }, 10000);
  // }

  shouldShowNotifications(currentDateTime, notificationDateTime) {
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();

    const notificationHour = notificationDateTime.getHours();
    const notificationMinutes = notificationDateTime.getMinutes();

    return currentHour === notificationHour &&
          currentMinutes === notificationMinutes;
  }

  render() {
    const notificationContainer = this.shouldShowNotifications(this.state.currentDateTime,
      this.props.notificationDateTime) ?
        <div id='Notification-container' /> : <div />;
    const currentTime = this.state.currentDateTime.getFullYear();

    return (
      <div id='Notification-page'>
        <p> Notifications are shown below: </p>
        <p className='currentTime'>Time: {currentTime}</p>
        {notificationContainer}
      </div>
    );
  }
}

NotificationScreenComponent.defaultProps = {
  currentDateTime: new Date(Date.now()),
  notificationDateTime: new Date(Date.now()),
  notifications: [
    {
      description: 'default',
      dateTime: {
        dateTime: {
          year: 2017,
          month: 9,
          day: 4,
          hour: 19,
          minute: 59,
        },
      },
    },
  ],
};

NotificationScreenComponent.propTypes = {
  currentDateTime: PropTypes.instanceOf(Date),
  notificationDateTime: PropTypes.instanceOf(Date),
  notifications: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    dateTime: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      day: PropTypes.number,
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
  })),
};

export const NotificationScreenButtons = {
  RIGHT: () => ButtonAction.goToPage('/'),
  TOP: () => ButtonAction.doNothing(),
  LEFT: () => ButtonAction.doNothing(),
  DOWN: () => ButtonAction.doNothing(),
};

export default WithButtonConfigs(
  NotificationScreenComponent,
  NotificationScreenButtons
);
