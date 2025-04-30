import axios from 'axios';


const waitersApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/waiters/',
  baseURL: 'http://127.0.0.1:8000/api/waiters/',
                                 
});

console.log(waitersApi)


export const getWaiters = () => waitersApi.get("/");

export const createWaiter = (waiter) => waitersApi.post("/", waiter);

export const getWaiter = (id) => waitersApi.get(`/${id}/`)


export const updatedWaiter = (id, waiter) => waitersApi.put(`/${id}/`, waiter)

export const deleteWaiter = async (id) => {
  try {
    const response = await waitersApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el camarero.");
    }
  }
};

 