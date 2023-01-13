import { createContext } from "react"
import { useEffect,useState } from "react"
import {Tasks} from "../task"

export const TaskContext= createContext()

export function TaskContextProvaider(props) {
    const [tasks, settasks] = useState([])
    
    useEffect(()=>{
     settasks(Tasks);
    },[])
  
    function crearTarea(tarea){
      settasks([...tasks,{
          title:tarea.title,
          id:tasks.length,
          description:tarea.description
      }])
  
    }
  function eliminarTarea(ID){
    settasks(tasks.filter((e)=>e.id !== ID))
  }
    return (
    <>
     <TaskContext.Provider value={{
        tasks,
        crearTarea,
        eliminarTarea
     }}>
        {props.children}
     </TaskContext.Provider>
    </>
  )
}

