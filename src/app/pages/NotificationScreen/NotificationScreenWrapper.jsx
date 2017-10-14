import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationScreenComponent } from './NotificationScreen';

export const NotificationScreen = ({ notification }) => {
  return (
    <NotificationScreenComponent notifications={ [notification] } />
  );
};

const mapStateToProps = (state) => {
  return { notification: state.generalStore.notification };
};

NotificationScreen.propTypes = {
  notification: PropTypes.shape().isRequired,
};

NotificationScreen.defaultProps = {
  notification: {
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
  },
};

export default connect(mapStateToProps)(NotificationScreen);
