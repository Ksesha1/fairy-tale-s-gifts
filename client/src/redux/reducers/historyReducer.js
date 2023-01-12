import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addHistory: (state, action) => [...state, action.payload],
  },
});
export const {
  getHistory, addHistory,
} = historySlice.actions;
export default historySlice.reducer;
