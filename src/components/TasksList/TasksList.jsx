import { NewTask } from "../NewTask/NewTask"
import { Task } from "../Task/Task"

import './TasksList.css'

export const TasksList = ({ dashboard }) => {
  return (
    <section className='tasks'>
          {
            dashboard.tasks.map(task => (
              <Task key={task.id} id={task.id} title={task.title} members={task.assignedMembers} />
            ))
          }
          <NewTask />
      </section>
  )
}
