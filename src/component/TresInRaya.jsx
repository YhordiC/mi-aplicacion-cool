import React, { useState } from 'react'
import Board from './container/BoardTresLIne'
import '../styles/GameTresLinea.css'

const TresInRaya = () => {

  /* en nuestro estado creamos un areglo y lo llenamos con null,
  haciendo un historial de nuestros movimient*/
  const [history,setHistory]= useState([Array(9).fill(null)]); 
  // emnumera los movientos 
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay= (nextSquares)=>{
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
   
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
   
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <p onClick={() => jumpTo(move)}>{description}</p>
      </li>
    );
  });
  return (
    <div className='game'>
      
      <div className='game-board'>
      <h3>Tres en Raya</h3>
      <Board xIsNext= {xIsNext} squares = {currentSquares} onPlay={handlePlay}/>
    
      </div>

     <div className='game-info'>
      <ol>{moves}</ol>
     </div>
    </div>
    
  )
}

export default TresInRaya
