import '../../styles/SquareTresLinea.css'

const Square = ({value, onSquareClick}) => {
 
  return <button 
  className='square'
  onClick={onSquareClick}
 
  >
    {value}
    </button>
  
}

export default Square
