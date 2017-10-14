import React from 'react';
import getLocation from '../../util/LocationGetter/LocationGetter';
import { getMood } from '../../util/MoodGetter/MoodGetter';

class CarerLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      time: null,
      mood: 'undecided',
    };
  }
  componentDidMount() {
    setInterval(() => {
      const data = getLocation();
      const moodData = getMood();
      this.setState({
        location: data.location,
        time: data.time,
        mood: moodData.mood,
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
          <p className='timeDisplay'>time sent = {(new Date(this.state.time)).toString()}</p>
          <p className='moodDisplay'>users last mood = {this.state.mood}</p>
        </div>
      );
    }
    return (
      <div id='carer-location-screen' className='carer-location-screen'>
        <p className='title'>carer information about user:</p>

        {locationText}
      </div>
    );
  }
}

CarerLocation.propTypes = {};

export default CarerLocation;
