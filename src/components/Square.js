
import { useSelector, useDispatch } from 'react-redux';
import { click, currentBoard} from '../features/TicTac.js';
import { switchP } from '../features/CurrentPlayer';
import { Patterns } from './pattern.js';
import {store} from '../app/store'
import { updateGame,tieGame } from '../features/GameOver.js';
function Square(props) {
  
    const count = useSelector(currentBoard);
  
    const dispatch = useDispatch();
  
    function makeMove() {
        if(count.TicTac[props.sqr] === null && !count.GameOver.gameOver) {
          dispatch(click({index: props.sqr, player: count.CurrentPlayer}))
          count.CurrentPlayer === 'X' ? dispatch(switchP('O')) : dispatch(switchP('X'))
        }
        Patterns.forEach(winMove => {
          const player =  count.CurrentPlayer
            let winner =  true
            winMove.forEach(index => {
              if(store.getState().TicTac[index] !== player) {
                 winner = false
              }
            })
            if(winner) {
              dispatch(updateGame(true))
            }
        } )
       if(!store.getState().TicTac.includes(null) && !store.getState().GameOver.gameOver ) {
        //  console.log(count.GameOver.gameOver,store.getState().GameOver.gameOver)
        dispatch(tieGame(true))
       } 
  
    }
    return (
        <button className="square" onClick={makeMove}>
            {count.TicTac[props.sqr]}
        </button>
    )
}

export default Square
