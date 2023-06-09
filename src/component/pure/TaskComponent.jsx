
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

export  function TaskComponent({task}) {
  return (
    <div>
      <h2>
        Nombre:{ task.name}
      </h2>
      <h3>
        Descripción: { task.description}
      </h3>
      <h4>
        Level: { task.level}
      </h4>
      <h5>
        This task is: {task.completed ? 'TERMINADO' : 'INCOMPLETO'}
      </h5>

    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}


