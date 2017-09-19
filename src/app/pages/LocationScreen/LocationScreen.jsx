import React from 'react';
/*
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';
*/

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
// import ButtonAction from '../../../framework/util/ButtonAction';
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
/*
LocationScreenComponent.propTypes = {

  contacts: arrayOf(shape({
    name: string,
    phone: string,
    address: string,
  })).isRequired,

};
*/
export const LocationScreenButtons = {
  // BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(LocationScreenComponent, LocationScreenButtons);
