import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, Actions) => {
      state.books.push(Actions.payload);
    },
    removeBook: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
