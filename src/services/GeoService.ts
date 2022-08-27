import HttpClient from "services/HttpClient";
import IGeoServiceLocation from "models/IGeoServiceLocation";

/* See: https://ipwhois.io/documentation */
const GeoService = () => {
  const getCurrentIPAddress = async (): Promise<IGeoServiceLocation> => {
    const client = HttpClient();
    let url = "https://ipwho.is/";
    return await client.getData(url).then((response) => {
      let geoResult = response.data;

      let location = {
        ip: response.data.ip,
        city: geoResult.city,
        region: geoResult.region,
        country: geoResult.country,
        latitude: geoResult.latitude,
        longitude: geoResult.longitude,
        message: `Your ip is ${geoResult.ip} and your location: ${geoResult.latitude}, ${geoResult.longitude} which is in ${geoResult.city}, ${geoResult.region} ${geoResult.country}`,
      } as IGeoServiceLocation;

      return location;
    });
  };

  return {
    getCurrentIPAddress,
  };
};

export default GeoService;
