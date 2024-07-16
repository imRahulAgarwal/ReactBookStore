import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import bookSlice from "./bookSlice/bookSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        books: bookSlice,
    },
});

export default store;
