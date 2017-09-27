
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

export const SendLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition);
  }
};
export default SendLocation;
