/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'UEbwYrkMVylSDvFguHMk';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const initialState = {
  books: [],
  status: 'update',
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },
);

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, book);
      thunkAPI.dispatch(addBook(book));
      return res.status;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deteteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${API_URL}/${id.item_id}`);
      thunkAPI.dispatch(removeBook(id));
      return res.status;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books[action.payload.item_id] = [action.payload];
    },
    removeBook: (state, action) => {
      delete state.books[action.payload.item_id];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        status: 'update',
      }))
      .addCase(addBooks.fulfilled, (state) => {
        state.status = 'update';
      })
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        status: 'update',
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
