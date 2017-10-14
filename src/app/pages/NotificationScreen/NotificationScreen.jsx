import React from 'react';
import PropTypes from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './notification_screen.css';

export class NotificationScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date(this.getToday()),
      notificationTimes: this.parseNotifications(props.notifications),
      shouldDisplayNotification: false,
    };
  }

  componentWillMount() {
    this.setNotificationState();
    this.checkNotifications();
  }

  getToday() {
    return Date.now();
  }

  setNotificationState() {
    this.setState({
      currentDateTime: new Date(this.getToday()),
      shouldDisplayNotification: this.shouldShowNotifications(
        this.state.currentDateTime,
        this.state.notificationTimes[0]
      ),
    });
    this.state.shouldDisplayNotification = this.shouldShowNotifications(
        this.state.currentDateTime,
        this.state.notificationTimes[0]
      );
  }

  checkNotifications() {
    setInterval(() => {
      this.setNotificationState();
    }, this.props.checkInterval);
  }

  parseNotifications(notifications) {
    if (!notifications) {
      return [];
    }

    return notifications
      .filter(n => n.dateTime)
      .map(n => new Date(
          n.dateTime.year,
          n.dateTime.month,
          n.dateTime.day,
          n.dateTime.hour,
          n.dateTime.minute
        )
      );
  }

  shouldShowNotifications(currentDateTime, notificationDateTime) {
    if (!(notificationDateTime instanceof Date)) {
      return false;
    }

    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();

    const notificationHour = notificationDateTime.getHours();
    const notificationMinutes = notificationDateTime.getMinutes();

    return currentHour === notificationHour &&
          currentMinutes === notificationMinutes;
  }

  handleDismiss() {
    this.setState({
      shouldDisplayNotification: false,
    });
  }

  render() {
    const notificationText = this.props.notifications[0].description;
    const notificationDate = 'Test Date';

    return (
      <div id='Notification-Screen'>
        {
          this.state.shouldDisplayNotification
          ? <NotificationBox
            text={ notificationText }
            date={ notificationDate }
            onClick={ () => this.handleDismiss() }
          />
          : null
        }
      </div>
    );
  }
}

export function NotificationBox(props) {
  return (
    <div className='notification-popup'>
      <p id='textLine'>{props.text}</p>
      <p id='dateLine'>{props.date}</p>
      <button id='Dismiss-Button' onClick={ props.onClick }>Dismiss</button>
    </div>
  );
}

NotificationScreenComponent.defaultProps = {
  notifications: {
    'description': 'Default',
    'dateTime': {
      'year': 2000,
      'month': 0,
      'day': 0,
      'hour': 0,
      'minute': 0,
    },
  },
  checkInterval: 60000,
};

NotificationScreenComponent.propTypes = {
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
  checkInterval: PropTypes.number,
};

NotificationBox.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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

