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

export default connect(mapStateToProps)(NotificationScreen);
