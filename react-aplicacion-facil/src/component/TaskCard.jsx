import "./componentesCss/TaskCard.css"
import {CgTrash} from "react-icons/cg";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ conten ,eliminarTarea}) {
  let valor= useContext(TaskContext);
  return (
    <div className="contenedor">
     <div>
     <h2>{conten.title}</h2>
      <p>{conten.description}</p>
     </div>
      
      <span onClick={()=> eliminarTarea(conten.id)} className="eliminar"><CgTrash/></span>
    </div>
  );
}

export default TaskCard;
