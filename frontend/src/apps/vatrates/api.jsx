import axios from 'axios';


const vatratesApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/vatrates/',
  baseURL: 'http://127.0.0.1:8000/api/vatrates/',
                                 
});

console.log(vatratesApi)


export const getVatRates = () => vatratesApi.get("/");

export const createVatRate = (vatrate) => vatratesApi.post("/", vatrate);

export const getVatRate = (id) => vatratesApi.get(`/${id}/`)


export const updatedVatRate = (id, vatrate) => vatratesApi.put(`/${id}/`, vatrate)

export const deleteVatRate = async (id) => {
  try {
    const response = await vatratesApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      // Lanzamos el error para manejarlo donde se llame a deleteVatRate
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el tipo iva.");
    }
  }
};

