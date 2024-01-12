import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContactApi, deleteContactApi, getContactsApi } from "../services/api";


export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await getContactsApi()
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
            return await createContactApi(newContact)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    } 
)

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            return await deleteContactApi(id)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)