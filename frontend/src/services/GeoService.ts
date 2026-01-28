import ApiResponse from "@/models/api/ApiResponse";
import GeoServiceLocation from "@/models/GeoServiceLocation";

/* See: https://ipwhois.io/documentation */
const GeoService = () => {
  const getCurrentIPAddress = async (): Promise<ApiResponse<GeoServiceLocation>> => {
    try {
      const url = "https://ipwho.is/";
      const response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      
      if (!response.ok) {
        return {
          success: false,
          message: `Failed to fetch IP address: ${response.statusText}`,
        };
      }
      
      const geoResult = await response.json();
      
      const location: GeoServiceLocation = {
        ip: geoResult.ip,
        city: geoResult.city,
        region: geoResult.region,
        country: geoResult.country,
        latitude: geoResult.latitude,
        longitude: geoResult.longitude,
        message: `Your ip is ${geoResult.ip} and your location: ${geoResult.latitude}, ${geoResult.longitude} which is in ${geoResult.city}, ${geoResult.region} ${geoResult.country}`,
      };

      return {
        success: true,
        data: location,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch IP address",
      };
    }
  };

  return {
    getCurrentIPAddress,
  };
};

export default GeoService;
