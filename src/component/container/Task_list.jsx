import React from 'react'
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import  {TaskComponent}  from '../pure/TaskComponent'

function TaskListComponent() {

const defaultTask= new Task('Tarea de Fisica','Realizar veinte ejercicios sobre el movimiento rectilineo uniforme',false, LEVELS.NORMAL)

  return (
    <div>
        <h2>Task_list</h2>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}



export default TaskListComponent
