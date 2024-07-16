import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [], pages: 1 };

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload.books;
            state.pages = action.payload.pages;
        },
    },
});

export const { login, logout } = bookSlice.actions;

export default bookSlice.reducer;
