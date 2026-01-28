import ApiResponse from "@/models/api/ApiResponse";
import ApiResponsePaged from "@/models/api/ApiResponsePaged";

export default interface HttpClientResponse<T> {
  error: boolean;
  status?: number;
  result: ApiResponse<T> | ApiResponsePaged<T>;
}
