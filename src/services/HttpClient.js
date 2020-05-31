/*
	Encapsulates all outbound http communication from the application to get/set data
	and forms	the basic building block and adaptor for http requests made by the application.
	Also provides way to set auth headers needed by some requests
*/
const HttpClient = () => {
  const fetchResponseHandler = (response) => {
    // Wraps fetch response and traps most errors and returns raw response as well.
    // Ensures consisten response in form of:
    // {data: [PAYLOADRETURNED_MAY_BE_JSON], code: response.status, response: response }
    if (response.ok) {
      return response
        .json()
        .then((json) => {
          // the status was ok and there is a json body
          return Promise.resolve({ data: json, code: response.status, response: response });
        })
        .catch((err) => {
          // the status was ok but there is no json body
          return Promise.resolve({ data: response, code: response.status, response: response });
        });
    } else {
      return response
        .json()
        .catch((err) => {
          // the status was not ok and there is no json body
          return Promise.resolve({ data: response.statusText, code: response.status, response: response });
        })
        .then((json) => {
          // the status was not ok but there is a json body
          return Promise.resolve({ data: json.error.message, code: response.status, response: response });
        });
    }
  };

  // Modern fetch based methods to put into full use
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const fetchJsonDataWithAuthToken = async (url, token) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  const fetchJsonData = async (url) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  const fetchPostJsonData = async (url, data = {}) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return fetchResponseHandler(response);
    });
  };

  // XMLHttpRequest and callback based implementation
  // that you can deprecate but retain for legacy browers

  const getJson = (url, callback) => {
    return request('GET', url, null, null, callback);
  };

  const getJsonWithHeaders = (url, headers, callback) => {
    return request('GET', url, null, headers, callback);
  };

  const postJson = (url, jsonData, callback) => {
    return request('POST', url, jsonData, null, callback);
  };

  const postJsonWithHeaders = (url, jsonData, headers, callback) => {
    return request('POST', url, jsonData, headers, callback);
  };

  const request = (method, url, jsonData, headers, callback) => {
    let request = new XMLHttpRequest();

    request.open(method, url, true);

    if (headers) {
      for (let i = 0; i < headers.length; i++) {
        request.setRequestHeader(headers[i].key, headers[i].value);
      }
    }

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let json = JSON.parse(request.responseText);
        if (json.data) {
          callback({
            data: json.data,
            error: false
          });
        } else {
          callback({
            data: json,
            error: false
          });
        }
      } else {
        callback({
          error: true
        });
      }
    };

    request.onerror = function (err) {
      callback({
        error: true,
        err
      });
    };

    //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (jsonData) {
      request.send(JSON.stringify(jsonData));
    } else {
      request.send();
    }
  };

  return {
    fetchJsonData,
    fetchJsonDataWithAuthToken,
    fetchPostJsonData,
    getJson,
    postJson,
    getJsonWithHeaders,
    postJsonWithHeaders
  };
};

export default HttpClient;
