import "./componentesCss/TaskCard.css"
import {CgTrash} from "react-icons/cg";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ conten}) {
  let {eliminarTarea}= useContext(TaskContext);
  return (
    <div className="contenedor bg-gray-800 text-white p-4 rounded-md">
     <div>
     <h2 className="text-xl font-bold capitalize">{conten.title}</h2>
      <p className="text-gray-500 text-sm">{conten.description}</p>
     </div>
      
      <span onClick={()=> eliminarTarea(conten.id)} className="eliminar bg-red-500 px-2 py-1 rounded-md mt-1"><CgTrash/></span>
    </div>
  );
}

export default TaskCard;
