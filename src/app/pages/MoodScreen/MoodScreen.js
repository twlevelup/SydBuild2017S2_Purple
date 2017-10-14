import React from 'react';
// import PropTypes from 'prop-types';
// import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import Arrow from './Arrow';
import './MoodScreen.css';

export const MoodScreenComponent = () => {
  return (
    <div className='screen-wrapper'>
      <br />
      <Arrow direction='up' />
      <div className='screen-half'>
        <div className='upText'>
          How are you feeling?
        </div>
      </div>
      <div className='screen-half'>
        <div className='downText'>
          List of responses
        </div>
        <Arrow direction='down' />
      </div>
    </div>
  );
};


export const MoodViewScreenButtons = {
  /* LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(), */
};


export default WithButtonConfigs(MoodScreenComponent, MoodViewScreenButtons);
