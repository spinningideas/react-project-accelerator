import HttpClient from "services/HttpClient";
/* See: https://ip-api.com/docs/api:json */
const GeoService = () => {
  const getCurrentIPAddress = async () => {
    const client = HttpClient();
    let url = "http://ip-api.com/json/";
    return await client.getData(url).then((response) => {
      return {
        ip: response.data.query,
        message: `Your ip is ${response.data.query} and your location: ${response.data.city} ${response.data.region}, ${response.data.country} `,
      };
    });
  };

  return {
    getCurrentIPAddress,
  };
};

export default GeoService;
