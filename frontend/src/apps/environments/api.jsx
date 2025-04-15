import axios from 'axios';


const environmentsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/environments/',
                                 
});


export const getEnvironments = () => environmentsApi.get("/");

export const createEnvironment = (environment) => environmentsApi.post("/", environment);

export const getEnvironment = (id) => environmentsApi.get(`/${id}/`)

export const updatedEnvironment = (id, environment) => environmentsApi.put(`/${id}/`, environment)

export const deleteEnvironment = async (id) => {
  try {
    const response = await environmentsApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el ambiente.");
    }
  }
};

