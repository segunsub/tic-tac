
import { useSelector, useDispatch } from 'react-redux';
import { click, currentBoard} from '../features/TicTac.js';
import { switchP } from '../features/CurrentPlayer';
import { Patterns } from './pattern.js';
import {store} from '../app/store'
import { updateGame,tieGame } from '../features/GameOver.js';
function Square(props) {
  
    const state = useSelector(currentBoard);
  
    const dispatch = useDispatch();
  
    function makeMove() {
        if(state.ticTac[props.sqr] === null && !state.gameOverSlice.gameOver) {
          dispatch(click({index: props.sqr, player: state.currentPlayer}))
          state.currentPlayer === 'X' ? dispatch(switchP('O')) : dispatch(switchP('X'))
        }
        Patterns.forEach(winMove => {
          const player =  state.currentPlayer
            let winner =  true
            winMove.forEach(index => {
              if(store.getState().ticTac[index] !== player) {
                 winner = false
              }
            })
            if(winner) {
              dispatch(updateGame(true))
            }
        } )
       if(!store.getState().ticTac.includes(null) && !store.getState().gameOverSlice.gameOver ) {
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
