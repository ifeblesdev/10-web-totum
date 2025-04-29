import axios from 'axios';


const boxesApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/boxs/',
  baseURL: 'http://127.0.0.1:8000/api/boxes/',
                                 
});

console.log(boxesApi)


export const getBoxes = () => boxesApi.get("/");

export const createBox = (box) => boxesApi.post("/", box);

export const getBox = (id) => boxesApi.get(`/${id}/`)


export const updatedBox = (id, box) => boxesApi.put(`/${id}/`, box)

export const deleteBox = async (id) => {
  try {
    const response = await boxesApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      // Lanzamos el error para manejarlo donde se llame a deleteBox
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar la caja.");
    }
  }
};

 