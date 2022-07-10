import './Task.css'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';

export const Task = ({ id, title, members }) => {
  return (
    <div
      className='tasks__column'
    >
      <div className='tasks__header-container'>
        <p className='tasks__header-title'>{title}</p>
      </div>
      <DroppableTaskMember id={id} members={members} />
      
    </div>

  )
}
