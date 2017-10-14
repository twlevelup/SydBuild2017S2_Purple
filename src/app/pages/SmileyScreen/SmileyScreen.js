import React from 'react';
// import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import RowSplitScreen from '../../../framework/components/RowSplitScreen/RowSplitScreen';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const SmileyScreenComponent = () => {
  const top = (<div>
    <div className='upText'>
      {'\u263a'} Press up if your happy
    </div></div>);
  const bottom = (<div><div className='downText'>
    Press down if your sad
  </div></div>);
  return (
    <RowSplitScreen top={ top } bottom={ bottom } />
  );
};


export const SmileyViewScreenButtons = {
  // LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  // RIGHT: () => ButtonAction.goToPage('/contacts'),
  //  TOP: () => ButtonAction.scrollUp(),
  // BOTTOM: () => ButtonAction.scrollDown(),
  SCREEN: () => ButtonAction.goToPage('/'),
};


export default WithButtonConfigs(SmileyScreenComponent, SmileyViewScreenButtons);
