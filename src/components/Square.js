
import { useSelector, useDispatch } from 'react-redux';
import { click, currentBoard} from '../features/TicTac.js';
import { switchP } from '../features/CurrentPlayer';
import { Patterns } from './pattern.js';
import { updateGame,tieGame } from '../features/GameOver.js';
function Square(props) {
  
    const state = useSelector(currentBoard);
  
    const dispatch = useDispatch();
  
    function makeMove() {
      const newBoard = [...state.ticTac]
      let gameOver = state.gameOverSlice.gameOver
        if(state.ticTac[props.sqr] === null && !gameOver) {
          newBoard[props.sqr] = state.currentPlayer
          dispatch(click({index: props.sqr, player: state.currentPlayer}))
          state.currentPlayer === 'X' ? dispatch(switchP('O')) : dispatch(switchP('X'))
        }
        Patterns.forEach(winMove => {
          const player =  state.currentPlayer
          let winner =  true
            winMove.forEach(index => {
              if(newBoard[index] !== player) {
                 winner = false
              }
            })
            if(winner) {
              dispatch(updateGame(true))
              gameOver = !gameOver
            }
        } )
       if(!newBoard.includes(null) && !gameOver ) {
        dispatch(tieGame(true))
       } 
  
    }
    return (
        <button className="square" onClick={makeMove}>
            {state.ticTac[props.sqr]}
        </button>
    )
}

export default Square
