const SERVICE_BASE_URL = 'https://destinos.develotion.com';
const LOCAL_STORAGE_KEY = 'obliUserKey';
const LOCAL_STORAGE_ID = 'userId';//REVISAR

//LOGIN
const userLogin = (userData) => {
  return fetch('https://destinos.develotion.com/login.php', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status === 200) {//ok
        return response.json();
      } else {//error
        return Promise.reject({
          message: 'Ha ocurrido un error',
          statusCode: response.status,
        });
      }
    })
    .catch((e) => {
      return Promise.reject({
        message: e.message,
      });
    });
};

//REGISTRO
const register = (data) => {
  return fetch('https://destinos.develotion.com/usuarios.php', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {//ok
        return response.json();
      } else {//error
        return Promise.reject({
          message: 'Ha ocurrido un error',
          statusCode: response.status,
        });
      }
    })
    .catch((e) => {
      return Promise.reject({
        message: e.message,
      });
    });
};

//OBTENER TODOS LOS PAQUETES
const getPaquetes = async (id) => {
  // return fetch(`${SERVICE_BASE_URL}/paquetes.php`,{
  //   method: 'GET',
  //   headers: {
  //     'apikey': localStorage.getItem(LOCAL_STORAGE_KEY),
  //     'Content-Type': 'application/json'
  //   } 
  // })  
  // .then((response) => {
  //   if (response.status === 200) {
  //     return response.json();
  //   } else {
  //     return Promise.reject({
  //       message: 'Ha ocurrido un error al retornar los paquetes',
  //     });
  //   }
  // });

  try {
    const response = await fetch(`${SERVICE_BASE_URL}/paquetes.php`, {
         method: 'GET',
         headers: {
           'apikey': localStorage.getItem(LOCAL_STORAGE_KEY),
           'Content-Type': 'application/json'
         }
    })
    if (response.status === 200) {
      return response.json();
    }
    else if (response.status === 401) {//Se venció la api key
      //MANDAR A LA PANTALLA DE LOGIN
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  } catch (error) {
      return Promise.reject({
        message: 'Ha ocurrido un error al retornar los paquetes',
      });
  }
};

//OBTENER VENTAS
const getVentas = (userId) => {
  return fetch(`${SERVICE_BASE_URL}/ventas.php?idVendedor=${userId}`,{
    method: 'GET',
    headers: {
      'apikey': localStorage.getItem(LOCAL_STORAGE_KEY),
      'Content-Type': 'application/json'
    } 
  })  
  .then((response) => {
    if (response.status === 200) {//ok
      return response.json();
    } 
    else if (response.status === 401) {//Se venció la api key
      //MANDAR A LA PANTALLA DE LOGIN
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    else {//error
      return Promise.reject({
        message: 'Ha ocurrido un error al retornar las ventas',
      });
    }
  });
}

//AGREGAR VENTA
const registrarCompra = (data) => {
  return fetch(`${SERVICE_BASE_URL}/ventas.php`, {
    method: 'POST',
    headers: {
      'apikey': localStorage.getItem(LOCAL_STORAGE_KEY),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // Verifico el status code de la respuesta, esperando que sea 200
      if (response.status === 200) {
        // Si es 200 hago el response.json para obtener el body de la respuesta
        return response.json();
      }
      else if (response.status === 401) {//Se venció la api key
        //MANDAR A LA PANTALLA DE LOGIN
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } else {
        // En caso de recibir otro status code, hago un reject y devuelvo un mensaje y el código de status recibido
        return Promise.reject({
          message: 'Ha ocurrido un error',
          statusCode: response.status,
        });
      }
    })
    .catch((e) => {
      return Promise.reject({
        message: e.message,
      });
    });
};

const onRemoveUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

const getUserFromLocalStorage = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

export {
  userLogin,
  register,
  getVentas,
  registrarCompra,
  getPaquetes,
  onRemoveUser,
  getUserFromLocalStorage,
  LOCAL_STORAGE_KEY
};