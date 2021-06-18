import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    gameOver:false,
    tie:false
}
export const gameOver = createSlice({
  name: 'Game',
  initialState,

  reducers: {
    updateGame: (state,action) => {
      state.gameOver = action.payload;
    },
    tieGame: (state,action) => {
          state.gameOver = action.payload;
        state.tie = action.payload
      }
  },

});

export const { updateGame,tieGame } = gameOver.actions;

export const status = (state) => state;

export default gameOver.reducer;