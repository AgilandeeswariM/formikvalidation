import { configureStore } from "@reduxjs/toolkit";
import { BookSlice } from "./reducer/BookSlice";

 export const store = configureStore({
    reducer:{
        app: BookSlice.reducer
    }
})