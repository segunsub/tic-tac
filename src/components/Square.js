
import { useSelector, useDispatch } from 'react-redux';
import {
  click,
  reset,
  currentBoard
} from '../features/TicTac.js';
import {
    switchP,
    currentP
  } from '../features/CurrentPlayer';

function Square(props) {
   
    const count = useSelector(currentBoard);
    const dispatch = useDispatch();
    function makeMove() {
        if(count.TicTac[props.sqr] === null) {
          dispatch(click({index: props.sqr, player: count.CurrentPlayer}))
        }
       count.CurrentPlayer === 'X' ? dispatch(switchP('O')) : dispatch(switchP('X'))
       
       console.log(count.TicTac.includes(null))
        
    }
    return (
        <button className="square" onClick={makeMove}>
            {count.TicTac[props.sqr]}
        </button>
    )
}

export default Square
