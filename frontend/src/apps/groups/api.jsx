import axios from 'axios';


const groupsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/groups/',
                                 
});

console.log(groupsApi)


export const getGroups = () => groupsApi.get("/");

export const createGroup = (group) => groupsApi.post("/", group);

export const getGroup = (id) => groupsApi.get(`/${id}/`)


export const updatedGroup = (id, group) => groupsApi.put(`/${id}/`, group)

export const deleteGroup = async (id) => {
  try {
    const response = await groupsApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      // Lanzamos el error para manejarlo donde se llame a deleteGroup
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el grupo.");
    }
  }
};

