import { useSelector,  useDispatch} from 'react-redux';
import {reset} from '../features/TicTac.js';
import Board from './Board';
import { tieGame } from '../features/GameOver.js';
import { currentBoard} from '../features/TicTac.js';

function Game() {
    const dispatch = useDispatch();
    const player = useSelector(currentBoard);
    function resetGame () {
        dispatch(reset())
        dispatch(tieGame(false))
    }
    return (
        <div className="game">
            <div className="game-board">
               <h1>Tic Tac Toe</h1>
               <h2>{!player.GameOver.gameOver ? `Next Player:${player.CurrentPlayer}` : player.GameOver.tie ?`Tie Game` : player.CurrentPlayer === 'X' ? `Winner : O` :  `Winner : X` }</h2>
                <Board/>
                {player.GameOver.gameOver ? <button onClick={resetGame}>Reset</button> : null}
            </div>
            
        </div>
    )
}

export default Game
