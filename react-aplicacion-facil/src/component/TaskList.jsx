import TaskCard from "./TaskCard"
import "./componentesCss/TaskList.css"
import {useContext} from ".react"
import { TaskContext } from "../context/TaskContext";


function TaskList() {
   
const {tasks}= useContext(TaskContext);   

  return (
   
   <div className="container">
     {tasks.map((conten)=>(
         <TaskCard key={conten.id}conten={conten} eliminarTarea={eliminarTarea}/>
     ))}
    </div>
  )
}

export default TaskList