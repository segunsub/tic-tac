// import {useState} from 'react';
import Board from './Board';
import {
    currentP
  } from '../features/CurrentPlayer';
function Game() {

    return (
        <div className="game">
            <div className="game-board">
               <h1>Tic Tac Toe</h1>
                <Board/>
            </div>
            
        </div>
    )
}

export default Game
