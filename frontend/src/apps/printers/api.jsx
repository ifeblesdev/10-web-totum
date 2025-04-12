import axios from 'axios';


const printersApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/printers/',
                                 
});


export const getPrinters = () => printersApi.get("/");

export const createPrinter = (printer) => printersApi.post("/", printer);

export const getPrinter = (id) => printersApi.get(`/${id}/`)

export const deletePrinter = (id) => printersApi.delete(`/${id}/`);

export const updatedPrinter = (id, printer) => printersApi.put(`/${id}/`, printer)