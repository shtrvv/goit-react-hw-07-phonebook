import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./contactsThunks";

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.message;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.items = payload
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.items.push(payload)
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.items = state.items.filter(contact => contact.id !== payload.id)
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
    }
})

export const contactsReducer = contactsSlice.reducer;
