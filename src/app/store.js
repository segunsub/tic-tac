import { configureStore } from '@reduxjs/toolkit';
import gameBoard from '../features/TicTac';
import CurrentPlayer from '../features/CurrentPlayer';
import GameOver from '../features/GameOver';

export const store = configureStore({
  reducer: {
    ticTac: gameBoard,
    currentPlayer:CurrentPlayer,
    gameOverSlice:GameOver
  },
});
