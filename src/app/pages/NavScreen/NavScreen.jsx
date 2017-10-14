import React from 'react';
import {
  string,
  arrayOf,
  number,
  shape,
} from 'prop-types';

import ScrollList from '../../../framework/components/ScrollList/ScrollList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';


export const NavScreenComponent = ({ locations, selectedIndex }) => {
  return (
    <div className='nav-screen'>
      <h1 className='title'>Navigation!</h1>
      <ScrollList
        labels={ locations.map(l => l.name) }
        selectedIndex={ selectedIndex }
      />
    </div>
  );
};

const getNextIndex = (indexChange, selectedIndex, locations) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + locations.length) % locations.length);
};

export const NavScreenButtons = ({ locations, selectedIndex = 0 }) => ({
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, locations) } });
  },
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, locations) } });
  },
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/'),
  SCREEN: () => ButtonAction.goToPage({
    pathname: '/map',
    state: { location: locations[selectedIndex] },
  }),
});

NavScreenComponent.propTypes = {
  selectedIndex: number,
  locations: arrayOf(shape({
    name: string,
  })).isRequired,
};

NavScreenComponent.defaultProps = {
  selectedIndex: 0,
};

export default WithButtonConfigs(NavScreenComponent, NavScreenButtons);
