import React from 'react';
// import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import RowSplitScreen from '../../../framework/components/RowSplitScreen/RowSplitScreen';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import Arrow from './Arrow';
import './MoodScreen.css';

export const MoodScreenComponent = () => {
  const top = (<div><Arrow direction='up' />
    <div className='upText'>
              How are you feeling?
              </div></div>);
  const bottom = (<div><div className='downText'>
              List of responses
              </div>
    <Arrow direction='down' /></div>);
  return (
    <RowSplitScreen top={ top } bottom={ bottom } />
  );
};


export const MoodViewScreenButtons = {
  // LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  // RIGHT: () => ButtonAction.goToPage('/contacts'),
  //  TOP: () => ButtonAction.scrollUp(),
  // BOTTOM: () => ButtonAction.scrollDown(),
  SCREEN: () => ButtonAction.goToPage('/'),
};


export default WithButtonConfigs(MoodScreenComponent, MoodViewScreenButtons);
