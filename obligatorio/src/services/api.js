const SERVICE_BASE_URL = 'https://destinos.develotion.com/';

const userLogin = (userData) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(`${SERVICE_BASE_URL}/{{destinos}}/login.php`, requestOptions).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    }
  );
};

const userRegister = () => {
  // Fetch
};

export { userLogin, userRegister };
