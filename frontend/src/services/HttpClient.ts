import ApiResponse from "@/models/api/ApiResponse";
import ApiResponsePaged from "@/models/api/ApiResponsePaged";
import { AUTH_TOKEN_STORAGE_KEY } from "@/services/auth";

/**
 * Standard client to make Http requests from browser to server via fetch.
 * Handles setting headers and tokens for authentication using local storage and AUTH_TOKEN_STORAGE_KEY.
 * Assumes the APIs being called returns a consistent type of ApiResponse<T> OR ApiResponsePaged<T>.
 * Provides an adapter pattern to make it easier to switch out the underlying http client.
 * @param baseUrl - Base URL of the API
 * @returns HttpClient
 */
export const HttpClient = (baseUrl: string) => {
  /**
   * Gets token from session from internal session for configured auth provider
   * @returns
   */
  const getToken = async (): Promise<string | null> => {
    const tokenCached = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) || "";
    if (tokenCached && tokenCached.length > 0) {
      return tokenCached;
    }
    // TODO: REMOVE THIS IF NOT NEEDED
    // const sessionResponse = await getAuthSession();
    // if (
    //   !sessionResponse.success ||
    //   !sessionResponse.data ||
    //   !sessionResponse.data.session ||
    //   !sessionResponse.data.session.token
    // ) {
    //   return null;
    // }
    // const sessionData = sessionResponse.data as UserSession;
    // return sessionData.session.token;
    return null;
  };

  /**
   * Builds headers for request to include no token
   * @returns Headers
   */
  const getHeadersNoToken = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return headers;
  };

  /**
   * Builds headers for request to include given token
   * @param token
   * @returns Headers
   */
  const getHeaders = (token: string) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Bearer " + token);
    headers.append("Access-Control-Allow-Origin", "true");
    // Add API key for backend authentication
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey) {
      headers.append("api-key", apiKey);
    }

    return headers;
  };

  /**
   * Make a GET request to the server with token to API that returns
   * response that is NOT ApiResponse<T>
   * @param token
   * @param url
   * @returns Non Paged Response - ApiResponse<T>
   */
  const get = async <T>(
    token: string,
    url: string
  ): Promise<ApiResponse<T>> => {
    const requestUrl = baseUrl + url;
    const fetchResponse = await fetch(requestUrl, {
      method: "GET",
      mode: "cors",
      headers: getHeaders(token),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * Make a GET request to the server with token from internal session
   * @param url
   * @returns Non Paged Response - ApiResponse<T>
   */
  const getAuthenticated = async <T>(url: string): Promise<ApiResponse<T>> => {
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "Unable to perform request - missing credentials",
      };
    }
    const requestUrl = baseUrl + url;
    const fetchResponse = await fetch(requestUrl, {
      method: "GET",
      //mode: "cors",
      //credentials: "include",
      headers: getHeaders(token),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * Make a POST request to the server without a token (unauthenticated request)
   * to API that returns a response that is a non paged response of ApiResponse<T>
   * @param url
   * @param data
   * @returns Non Paged Response - ApiResponse<T>
   */
  const post = async <T>(
    url: string,
    data: object = {}
  ): Promise<ApiResponse<T>> => {
    const fetchResponse = await fetch(baseUrl + url, {
      method: "POST",
      mode: "cors",
      headers: getHeadersNoToken(),
      body: JSON.stringify(data),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * Make a POST request to the server with a token from internal session
   * to API that returns a response that is NOT ApiResponse<T>
   * @param url
   * @param data
   * @returns Non Paged Response - ApiResponse<T>
   */
  const postAuthenticated = async <T>(
    url: string,
    data: object = {}
  ): Promise<ApiResponse<T>> => {
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "Unable to perform search - missing credentials",
      };
    }
    const fetchResponse = await fetch(baseUrl + url, {
      method: "POST",
      //mode: "cors",
      headers: getHeaders(token),
      body: JSON.stringify(data),
      //credentials: "include",
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * (Paged Response - ApiResponsePaged<T>)
   * Make a POST request to the server with a token from internal session
   * where the response is a paged data set that has additional pagination information
   * @param url
   * @param data
   * @returns Paged Response - ApiResponsePaged<T>
   */
  const postPagedAuthenticated = async <T>(
    url: string,
    data: object = {}
  ): Promise<ApiResponsePaged<T>> => {
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "Unable to perform search - missing credentials",
      };
    }
    const fetchResponse = await fetch(baseUrl + url, {
      method: "POST",
      //mode: "cors",
      headers: getHeaders(token),
      body: JSON.stringify(data),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponsePaged<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * Make a DELETE request to the server with a token provided
   * @param token
   * @param url
   * @returns
   */
  const deleteData = async <T>(
    token: string,
    url: string
  ): Promise<ApiResponse<T>> => {
    const fetchResponse = await fetch(baseUrl + url, {
      method: "DELETE",
      mode: "cors",
      headers: getHeaders(token),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  /**
   * Make a DELETE request to the server with a token provided
   * @param token
   * @param url
   * @returns
   */
  const deleteAuthenticated = async <T>(
    url: string
  ): Promise<ApiResponse<T>> => {
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "Unable to perform search - missing credentials",
      };
    }
    const fetchResponse = await fetch(baseUrl + url, {
      method: "DELETE",
      //mode: "cors",
      headers: getHeaders(token),
    });
    const status = await fetchResponse.status;
    let apiResponse = (await fetchResponse.json()) as ApiResponse<T>;
    apiResponse.status = status;
    return apiResponse;
  };

  const postFileAuthenticated = async <T>(
    url: string,
    formData: FormData
  ): Promise<ApiResponse<T>> => {
    const token = await getToken();
    const headersFormData = new Headers();
    // headersFormData.append("Content-Type", "multipart/form-data");
    headersFormData.append("Accept", "application/json");
    headersFormData.append("Authorization", "Bearer " + token);
    const requestUrl = baseUrl + url;
    const fetchResponseFileData = await fetch(requestUrl, {
      method: "POST",
      // mode: "cors",
      headers: headersFormData,
      body: formData,
    });
    return fetchResponseFileData.json() as T;
  };

  return {
    get,
    getAuthenticated,
    post,
    postAuthenticated,
    postPagedAuthenticated,
    postFileAuthenticated,
    deleteData,
    deleteAuthenticated,
  };
};

export default HttpClient;
