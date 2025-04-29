import axios from 'axios';


const usergroupsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/usergroups/',
  baseURL: 'http://127.0.0.1:8000/api/usergroups/',
                                 
});

console.log(usergroupsApi)


export const getUserGroups = () => usergroupsApi.get("/");

export const createUserGroup = (usergroup) => usergroupsApi.post("/", usergroup);

export const getUserGroup = (id) => usergroupsApi.get(`/${id}/`)


export const updatedUserGroup = (id, usergroup) => usergroupsApi.put(`/${id}/`, usergroup)

export const deleteUserGroup = async (id) => {
  try {
    const response = await usergroupsApi.delete(`/${id}/`);
    return response;
  } catch (error) {
    if (error.response?.data?.detail) {
      // Lanzamos el error para manejarlo donde se llame a deleteUserGroup
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Error al eliminar el grupo de usuarios.");
    }
  }
};

