import React from 'react';


import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import sendLocation from '../../../framework/util/LocationSender/LocationSender';
import Time from '../../../framework/components/Time/Time';
import './location.css';

export const LocationScreenComponent = () => {
  return (
    <div id='location-screen' className='location-screen'>
      <Time />
      <h1 className='title'>Tap screen to send your location to carer</h1>
    </div>
  );
};

export const LocationScreenButtons = {
  SCREEN: () => {
    sendLocation();
    ButtonAction.goToPage('/');
  },

};

export default WithButtonConfigs(LocationScreenComponent, LocationScreenButtons);
