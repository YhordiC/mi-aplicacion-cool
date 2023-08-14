
import {useEffect, useRef} from "react";
import '../styles/LineCanva.css';
export const LineCanva = ({xInicio,
  xFinal,
  yInicio,
  yFinal,Dibujar}) => {
 const ref= useRef();


 const  componenteDidMount= (canvas, contexto)=> {
   
    // obtener el contexto de 2d del canvas
     // establece el punto de inicio y final
  

    //configura el stylo de la linea
    contexto.strokeStyle = 'orange';
    contexto.lineWidth = 11;

    
    //comienz  a dibujar la linea
    contexto.beginPath(); 
    contexto.moveTo(xInicio, yInicio);
    contexto.lineTo(xFinal, yFinal);
    contexto.stroke() // dibuja la linea
    if(Dibujar===false){
      contexto.clearRect(0,0, canvas.width, canvas.height)
    }

 }

useEffect(()=>{
     
 const canvas = ref.current;
 const contexto = canvas.getContext("2d");
    componenteDidMount(canvas,contexto);
});
    return (
    <div className='containerCanva'
    style={ Dibujar ? {zIndex:0} : {zIndex:-1}}
    
    ><canvas ref={ref}
     width={346} height={360}/></div>
  )
}

