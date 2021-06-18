import { configureStore } from '@reduxjs/toolkit';
import gameBoard from '../features/TicTac';
import CurrentPlayer from '../features/CurrentPlayer';

export const store = configureStore({
  reducer: {
    TicTac: gameBoard,
    CurrentPlayer
  },
});
