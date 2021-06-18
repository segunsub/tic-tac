import { configureStore } from '@reduxjs/toolkit';
import gameBoard from '../features/TicTac';
import CurrentPlayer from '../features/CurrentPlayer';
import GameOver from '../features/GameOver';

export const store = configureStore({
  reducer: {
    TicTac: gameBoard,
    CurrentPlayer,
    GameOver
  },
});
