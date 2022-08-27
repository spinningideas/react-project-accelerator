export default interface IGeoServiceLocation {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  message: string;
}
