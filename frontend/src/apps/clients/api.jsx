import axios from 'axios';


const clientsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/clients/',
  baseURL: 'http://127.0.0.1:8000/api/clients/',
                                 
});


export const getClients = () => clientsApi.get("/");

export const createClient = (client) => clientsApi.post("/", client);

export const getClient = (id) => clientsApi.get(`/${id}/`)

export const deleteClient = (id) => clientsApi.delete(`/${id}/`);

export const updatedClient = (id, client) => clientsApi.put(`/${id}/`, client)