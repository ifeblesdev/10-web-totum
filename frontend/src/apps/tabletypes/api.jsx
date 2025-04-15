import axios from 'axios';


const tabletypesApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/tabletypes/',
                                 
});


export const getTableTypes = () => tabletypesApi.get("/");

export const createTableType = (tabletype) => tabletypesApi.post("/", tabletype);

export const getTableType = (id) => tabletypesApi.get(`/${id}/`)

export const updatedTableType = (id, tabletype) => tabletypesApi.put(`/${id}/`, tabletype)

export const deleteTableType = async (id) => {
  try {
    const response = await tabletypesApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el tipo de mesa.");
    }
  }
};
