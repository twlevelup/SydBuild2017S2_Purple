export const GetLocation = () => {
  const locations = JSON.parse(localStorage.getItem('locationList'));
  if (!Array.isArray(locations) || locations.length <= 0) {
    return {
      time: Date.now(),
      location: {
        lat: 0,
        lng: 0,
      },
    };
  }
  return locations[locations.length - 1];
};
export default GetLocation;
