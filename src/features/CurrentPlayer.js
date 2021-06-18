import {  createSlice } from '@reduxjs/toolkit';

const initialState = 'X'

export const player = createSlice({
  name: 'player',
  initialState,

  reducers: {
    switchP: (state,action) => {
      return action.payload;
    }
  },

});

export const { switchP} = player.actions;

export const currentP = (state) => state;

export default player.reducer;