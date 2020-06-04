import HttpClient from 'services/HttpClient';

const GeoService = () => {
  const getCurrentIPAddress = async () => {
    const client = HttpClient();
    let url = `https://freegeoip.app/json/`;
    return await client.getData(url).then((response) => {
      return {
        ip: response.data.ip,
        message: `Your ip is ${response.data.ip} and your location: ${response.data.city}, ${response.data.region_name} `
      };
    });
  };

  return {
    getCurrentIPAddress
  };
};

export default GeoService;
