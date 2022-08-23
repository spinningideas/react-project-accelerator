import HttpClient from "services/HttpClient";
import IGeoServiceLocation from "models/IGeoServiceLocation";
import { createInferTypeNode } from "typescript";

/* See: https://ip-api.com/docs/api:json */
const GeoService = () => {
  const getCurrentIPAddress = async (): Promise<IGeoServiceLocation> => {
    const client = HttpClient();
    let url = "http://ip-api.com/json/";
    return await client.getData(url).then((response) => {
      let geoResult = response.data;

      let result = {
        ip: response.data.query,
        city: geoResult.city,
        region: geoResult.region,
        country: geoResult.country,
        message: `Your ip is ${geoResult.query} and your location: ${geoResult.city} ${geoResult.region} ${geoResult.country}`,
      };
      return result;
    });
  };

  return {
    getCurrentIPAddress,
  };
};

export default GeoService;
