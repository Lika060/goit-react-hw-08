import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '', 
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.query = action.payload; 
    },
    resetFilter(state) {
      state.query = ''; 
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
