
const sendPosition = (position) => {
  let locations = JSON.parse(localStorage.getItem('locationList'));
  if (!Array.isArray(locations)) {
    locations = [];
  }
  locations.push(
    {
      time: Date.now(),
      location: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  localStorage.setItem('locationList', JSON.stringify(locations));
};

export const SendLocation = () => { // eslint-disable-line consistent-return
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((coords) => {
        sendPosition(coords);
        resolve();
      },
      reject);
    });
  }
};
export default SendLocation;
