import { NewTask } from "../NewTask/NewTask"

import './TasksList.css'

export const TasksList = ({ dashboard, children, handleNewTask }) => {
  return (
    <section className='tasks'>
        { children }
        <NewTask handleNewTask={handleNewTask} />
    </section>
  )
}
