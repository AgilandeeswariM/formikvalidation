import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBook: (state, action) => {
            state.books = action.payload
            state.loading = false;
            state.error = null;
            return state
        },
        createBook: (state, action) => {
            state.books = action.payload
            state.loading = false;
            state.error = null;
            return state
        },
        editBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
            state.loading = false;
            state.error = null;

        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
          },
          setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
    }
})

export const { setBook, createBook, deleteBook, editBook,setLoading,setError } = BookSlice.actions