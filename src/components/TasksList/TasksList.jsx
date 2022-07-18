import { NewTask } from "../NewTask/NewTask"

import './TasksList.css'

export const TasksList = ({ children }) => {
  return (
    <section className='tasks'>
        { children }
        <NewTask />
    </section>
  )
}
