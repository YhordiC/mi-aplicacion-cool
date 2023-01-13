import TaskCard from "./TaskCard"
import "./componentesCss/TaskList.css"
import {useContext} from "react"
import { TaskContext } from "../context/TaskContext";


function TaskList() {
   
const {tasks}= useContext(TaskContext);   

  return (
   
   <div className="container grid grid-cols-3 gap-2 max-2xl:grid-cols-2 max-sm:grid-cols-1">
     {tasks.map((conten)=>(
         <TaskCard key={conten.id}conten={conten} />
     ))}
    </div>
  )
}

export default TaskList