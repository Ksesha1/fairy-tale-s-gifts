import { createSlice } from '@reduxjs/toolkit';

export const presentsSlice = createSlice({
  name: 'presents',
  initialState: [],
  reducers: {
    addPresent: (state, action) => [...state, action.payload],
    deletePresent: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});
export const {
  getPresent, addPresent, deletePresent, updatePresent,
} = presentsSlice.actions;
export default presentsSlice.reducer;
