import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [],
};

const categoriesSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    checkStatus: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = ['Under construction'];
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
