import { useStore } from "react-redux";


export const history = {
  navigate: null,
  location: null,
};

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
    };
    if (body) {
      requestOptions.headers = {
        "Content-Type": "application/json",
      };
      requestOptions.body = JSON.stringify(body);
    }
    console.log(requestOptions);

    return fetch(url, requestOptions).then((u) => handleResponse(u));
  };
}
function handleResponse(response) {
  return response.text().then((text) => {
    const data = JSON.parse(text) || text;

    if (!response.ok) {
      // if ([401, 403].includes(response.status) && authToken()) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   const logout = () => store.dispatch(userActions.logout());
      //   logout();
      // }
      // if ([400].includes(response.status) && authToken()) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   const home = () => history.navigate("Acceuil");
      //   home();
      // }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
