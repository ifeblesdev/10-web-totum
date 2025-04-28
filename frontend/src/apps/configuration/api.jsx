import axios from 'axios';


const configurationApi = axios.create({

  baseURL: 'http://127.0.0.1:8000/api/configuration/', // Asegúrate de que esta sea la URL correcta para tu API de configuración.
});

console.log(configurationApi);

export const getConfiguration = () => configurationApi.get('/');

export const createConfiguration = (config) => configurationApi.post('/', config);


export const getConfigById = (id) => configurationApi.get(`/${id}/`);

export const updateConfiguration = (id, config) => configurationApi.put(`/${id}/`, config);

export const deleteConfiguration = async (id) => {
  try {
    const response = await configurationApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar la configuración.");
    }
  }
};
