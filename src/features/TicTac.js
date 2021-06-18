import {  createSlice } from '@reduxjs/toolkit';
const initialState = Array(9).fill(null)

export const tic_tac_toe = createSlice({
  name: 'board',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    click: (state,action) => {
      state[action.payload.index] = action.payload.player;
      return state;
    },
    reset: (state) => {
      return Array(9).fill(null);
    }
  },

});

export const { click,reset } = tic_tac_toe.actions;

export const currentBoard = (state) => state;

export default tic_tac_toe.reducer;
