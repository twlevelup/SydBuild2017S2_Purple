import React from 'react';
import PropTypes from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import sendLocation from '../../../framework/util/LocationSender/LocationSender';
import getLocation from '../../../framework/util/LocationGetter/LocationGetter';
import Time from '../../../framework/components/Time/Time';
import './location.css';

export class LocationScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      activeText: 'Tap screen to send your location to carer',
    };
  }
  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    SCREEN: () => {
      return sendLocation().then(() => {
        this.setState({
          location: Object.assign({}, getLocation().location),
          activeText: 'Location sent to carer!',
        });
      }, this.setState({
        activeText: 'Last Location send failed',
      }));
      // document.getElementsByClassName('title').innerHTML
    },
    BOTTOM: () => {
      ButtonAction.goToPage('/');
    },
  };
  render() {
    let locationText;
    if (this.state.location) {
      locationText = (
        <div className='locationDisplay'>
          <p className='latitudeDisplay'>latitude = {this.state.location.lat}</p>
          <p className='longitudeDisplay'>longitude = {this.state.location.lng}</p>
        </div>
      );
    }
    return (
      <div id='location-screen' className='location-screen'>
        <Time />
        <h1 className='title'>{this.state.activeText}</h1>
        {locationText}
      </div>
    );
  }
}

LocationScreenComponent.propTypes = {
  remapButtons: PropTypes.func.isRequired,
};
export default WithButtonConfigs(LocationScreenComponent);
