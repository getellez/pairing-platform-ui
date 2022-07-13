import { NewTask } from "../NewTask/NewTask"

import './TasksList.css'

export const TasksList = ({ dashboard, children }) => {
  return (
    <section className='tasks'>
        { children }
        <NewTask />
    </section>
  )
}
