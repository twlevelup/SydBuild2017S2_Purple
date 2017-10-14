import React from 'react';
import {
  number,
  shape,
} from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

const createMapComponent = location => withGoogleMap(props =>
  (<GoogleMap
    defaultZoom={ 12 }
    defaultCenter={ location }
  >
    {props.isMarkerShown && <Marker position={ location } />}
  </GoogleMap>)
);

export const MapScreenComponent = ({ location }) => {
  const actualLocation = location || { 'lat': -33.8630009, 'lng': 151.2085133 };
  const MyMapComponent = createMapComponent(actualLocation);

  return (
    <MyMapComponent
      containerElement={ <div className='map' style={ { height: '230px', zIndex: -1 } } /> }
      mapElement={ <div className='map' style={ { height: '100%' } } /> }
      isMarkerShown={ true }
    />
  );
};

MapScreenComponent.propTypes = {
  location: shape({
    lat: number,
    lng: number,
  }).isRequired,
};

export const MapScreenButtons = {
  TOP: () => ButtonAction.goToPage('/'),
  BOTTOM: () => ButtonAction.goToPage('/'),
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/'),
  SCREEN: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(MapScreenComponent, MapScreenButtons);
