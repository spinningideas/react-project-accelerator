import HttpClient from 'services/HttpClient';

const GeoService = () => {
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
    } else {
      return new Promise((resolve) => resolve({}));
    }
  };

  const getCurrentLocation = () => {
    return getCurrentPosition()
      .then((position) => {
        return new Promise((resolve) =>
          resolve({ lat: position.coords.latitude, lng: position.coords.longitude, locationAvailable: true })
        );
      })
      .catch((error) => {
        var msg = 'null';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg = 'User denied the request for Geolocation.';
            break;
          case error.POSITION_UNAVAILABLE:
            msg = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            msg = 'The request to get user location timed out.';
            break;
          case error.UNKNOWN_ERROR:
            msg = 'An unknown error occurred.';
            break;
        }
        return new Promise((resolve) =>
          resolve({
            message: msg,
            locationAvailable: false
          })
        );
      });
  };

  const getCurrentLocationWeather = () => {
    return new Promise((resolve, reject) => {
      getCurrentLocation().then((currentLocation) => {
        if (currentLocation.locationAvailable) {
          const getWeatherData = async () => {
            const client = HttpClient();
            let key = process.env.REACT_APP_APIKEY;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.lng}&appid=${key}`;
            await client.getData(url).then((response) => {
              resolve({
                locationAvailable: true,
                location: response.data.name,
                description: response.data.weather[0].description,
                message: `Your weather in ${response.data.name} is ${response.data.weather[0].description} `
              });
            });
          };
          return getWeatherData();
        } else {
          resolve({
            locationAvailable: false
          });
        }
      });
    });
  };

  return {
    getCurrentLocation,
    getCurrentLocationWeather
  };
};

export default GeoService;
