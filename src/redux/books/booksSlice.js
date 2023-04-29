import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RR9IW2ULTnGLqu54ZYUT/books/';

function transformData(data) {
  return data.map(([id, [book]]) => {
    const { title, author, category } = book;
    return {
      id, title, author, category,
    };
  });
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API);
  const { data } = response;
  return transformData(Object.entries(data));
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(API, book);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${API}${id}`);
  return id;
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
