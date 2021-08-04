const SERVICE_BASE_URL = 'https://destinos.develotion.com/';
const LOCAL_STORAGE_KEY = 'obligatorioUser';

const userLogin = (userData) => {
  const user = {
    id: 1,
    name: 'Mateo',
    password: '1234',
    username: 'test@gmail.com',
    token: Math.random(),
  };

  if (
    userData.username === user.username &&
    userData.password === user.password
  ) {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));

    return Promise.resolve(user);
  } else {
    return Promise.reject({
      message: 'Error al iniciar sesion',
      code: 401,
    });
  }
};

// data debera ser un objeto con este formato : { usuario: "xxx", password: "xxx"}
const register = (data) => {
  return fetch('https://destinos.develotion.com/usuarios.php', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => {
      // Verifico el status code de la respuesta, esperando que sea 200
      if (response.status === 200) {
        // Si es 200 hago el response.json para obtener el body de la respuesta
        return response.json();
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

const getTodos = async (id) => {
  // Async await
  try {
    const response = await fetch(`${SERVICE_BASE_URL}/todos?userId=${id}`);
    if (response.status === 200) {
      return response.json();
    }
  } catch (error) {
    return Promise.reject({
      message: 'Ha ocurrido un error al retornar los todos',
    });
  }
  // Promises
  /*
  return fetch(`${SERVICE_BASE_URL}/todos?userId=${id}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject({
        message: 'Ha ocurrido un error al retornar los todos',
      });
    }
  });*/
};

const deleteTodo = async (id) => {
  // Aca iria al servidor con el verbo DELETE para borrar el item
  /*
  const response = await fetch(`${SERVICE_BASE_URL}/todos?userId=${id}`, {
    method: 'DELETE',
    headers: {
      apikey: "sddgdgdg"
    }
  });
  */
  return Promise.resolve();
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
  getTodos,
  deleteTodo,
  onRemoveUser,
  getUserFromLocalStorage,
};