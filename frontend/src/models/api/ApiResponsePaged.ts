import Pagination from "@/models/api/Pagination";

export default interface ApiResponsePaged<T> {
  success: boolean;
  message?: string;
  data?: T;
  status?: number;
  pagination?: Pagination;
}
