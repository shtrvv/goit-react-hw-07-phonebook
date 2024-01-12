import axios from "axios";

axios.defaults.baseURL = 'https://65a15eb2600f49256fb187e7.mockapi.io';

export const getContactsApi = async () => {
    const response = await axios.get('/contacts');
    return response.data
}

export const createContactApi = async (newContact) => {
    const response = await axios.post(`/contacts`, newContact);
    return response.data
}

export const deleteContactApi = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data
}