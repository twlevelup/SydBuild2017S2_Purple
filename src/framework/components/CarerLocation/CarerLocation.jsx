import React from 'react';
import getLocation from '../../util/LocationGetter/LocationGetter';

class CarerLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      time: null,
    };
  }
  componentDidMount() {
    setInterval(() => {
      const data = getLocation();
      this.setState({
        location: data.location,
        time: data.time,
      });
    }, 3000);
  }
  render() {
    let locationText;

    if (this.state.location) {
      locationText = (
        <div className='locationDisplay'>
          <p className='latitudeDisplay'>latitude = {this.state.location.lat}</p>
          <p className='longitudeDisplay'>longitude = {this.state.location.lng}</p>
          <p className='timeDisplay'>time = {(new Date(this.state.time)).toString()}</p>
        </div>
      );
    }
    return (
      <div id='carer-location-screen' className='carer-location-screen'>
        {locationText}
      </div>
    );
  }
}

CarerLocation.propTypes = {};

export default CarerLocation;
