
import Square from './SquareTresLine'
import '../../styles/BoardTresLinea.css'
import { LineCanva } from '../LineCanva';
import botonSound from '../../audio/boton.mp3'
import fondoSound from '../../audio/fondo.mp3'
import useSound from 'use-sound';
import { useState} from 'react';
import IconSilencio from '../../img/icons/silencio.png';
import IconVolumen from '../../img/icons/alto-volumen.png';

const Board = ({xIsNext,squares,onPlay}) => {
  

  let xInicio,
  xFinal,
  yInicio,
  yFinal,
  Dibujar=false;


  const [playBotonMusic] = useSound(botonSound);
  const [playfondo,{stop,isPlaying}]= useSound(fondoSound);
  const [sonidofondo,setSonido]= useState(true);
  

const reproducir=()=>{
  setSonido(!sonidofondo);
  sonidofondo ? playfondo() : stop();
  
}
  const handleClick = (i) => {
    playBotonMusic();
    if(squares[i] || calculateWinner(squares)) { //si la casilla esta llena entonce retorna para no sobre escribir
      return;
    }
    
    const nextSquares = squares.slice(); // copia el array 
    if(xIsNext){
      nextSquares[i] = 'X';
    
    }else {
      nextSquares[i] = 'O';
      
    }
    
    onPlay(nextSquares);
    
  }

  const calculateWinner =(square)=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]){
        
        if(a === 0 && b === 1 && c === 2){
            
          xInicio = 0;
           xFinal = 350;
           yInicio = 60;
           yFinal = 60;
           Dibujar = true;  
         
        }

        if(a === 3 && b === 4 && c === 5){
            
          xInicio = 0;
           xFinal = 350;
           yInicio = 180;
           yFinal = 180;
           Dibujar = true;  
         
        }

        if(a === 6 && b === 7 && c === 8){
            
          xInicio = 0;
           xFinal = 350;
           yInicio = 300;
           yFinal = 300;
           Dibujar = true;  
         
        }

        if(a === 0 && b === 3 && c === 6){
            
          xInicio = 55;
           xFinal = 55;
           yInicio = 0;
           yFinal = 360;
           Dibujar = true;  
         
        }

        if(a === 1 && b === 4 && c === 7){
            
          xInicio = 170;
           xFinal = 170;
           yInicio = 0;
           yFinal = 360;
           Dibujar = true;  
         
        }

        if(a === 2 && b === 5 && c === 8){
            
          xInicio = 289;
           xFinal = 289;
           yInicio = 0;
           yFinal = 360;
           Dibujar = true;  
         
        }

        if(a === 0 && b === 4 && c === 8){
            
          xInicio = 0; 
           xFinal = 350;
           yInicio = 0;
           yFinal = 360;
           Dibujar = true;  
         
        }

        if(a === 2 && b === 4 && c === 6){
            
          xInicio = 350;
           xFinal = 0;
           yInicio = 0;
           yFinal = 360;
           Dibujar = true;  
         
        }


        return square[a];
      }
    }
    
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  
  if(winner){
    status = 'WINNER:' + winner;

   
   
  }else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    
    <div>
      <div className='container-btn-audio'>
        <div className='btn-shadow'></div>
        <button className='btn-music' active={isPlaying} onClick={reproducir}>
        <img src={sonidofondo ? IconSilencio : IconVolumen} width={50} height={50}alt="audio" />
      </button>
      </div>
      
       <div className='status'>
         <p>{status}</p>
       </div>
       <div className='tabla'>
        
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
        
        
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
        
        
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
        
       </div>
 
      <LineCanva xInicio={xInicio} xFinal={xFinal} yInicio={yInicio} yFinal={yFinal} Dibujar={Dibujar}/>
    </div>
  )}

export default Board