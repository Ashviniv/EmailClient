const apiHostUrl = process.env.REACT_APP_API_BASE_URL;

const defaultHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache",
    "pragma": "no-cache"
  };
};

const getRequestUrl = (reqPath) => {
  if ( apiHostUrl == null ) {
    return `${reqPath}`;
  } else {
    return `${apiHostUrl}/${reqPath}`;
  }
};

export const isSuccessResponse = status => {
  return status >= 200 && status < 300;
};

export const get = (reqPath, queryString, optionalHeaders={}) => {
  return fetch(getRequestUrl(reqPath), {
    method: "GET",
    headers: { ...defaultHeaders(), ...optionalHeaders },
  }).then((rawResponse) => {
    if ( isSuccessResponse(rawResponse.status) ) {
      return rawResponse.json()
      .then((parsedResponse) => {
         return new Promise((resolve, reject) => {
           resolve(parsedResponse);
         });
      })
    } else {
      throw new Error()
    }
  })
}

export const post = (reqPath, payload, optionalHeaders={}) => {
  return fetch(getRequestUrl(reqPath), {
    method: "POST",
    headers: { ...defaultHeaders(), ...optionalHeaders },
    body: JSON.stringify(payload)
  }).then(rawResponse => {
    if (isSuccessResponse(rawResponse.status)) {
      return rawResponse.json().then(parsedResponse => {
        return new Promise((resolve, reject) => {
          resolve(parsedResponse);
        });
      });
    } else {
      throw new Error();
    }
  });
}

