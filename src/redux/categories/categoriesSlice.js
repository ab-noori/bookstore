import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action
        .payload === 'Under construction'
        ? ['Under construction']
        : state.categories;
    },
  },
});

export default categoriesSlice.reducer;
