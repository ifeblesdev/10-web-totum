import axios from 'axios';


const systemusersApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/systemusers/',
  baseURL: 'http://127.0.0.1:8000/api/systemusers/',
                                 
});

console.log(systemusersApi)


export const getSystemUsers = () => systemusersApi.get("/");

export const createSystemUser = (systemuser) => systemusersApi.post("/", systemuser);

export const getSystemUser = (id) => systemusersApi.get(`/${id}/`)


export const updatedSystemUser = (id, systemuser) => systemusersApi.put(`/${id}/`, systemuser)

export const deleteSystemUser = async (id) => {
  try {
    const response = await systemusersApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      // Lanzamos el error para manejarlo donde se llame a deleteSystemUser
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el grupo de usuarios.");
    }
  }
};

