import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DraggableTaskMember } from '../DraggableTaskMember/DraggableTaskMember'
import './Task.css'

export const Task = ({ id, title, members }) => {
  return (
    <Droppable droppableId={id} direction='horizontal'>
      {
        (droppableProvided) => (
        <div 
        {...droppableProvided.droppableProps} 
        ref={droppableProvided.innerRef} 
        className='tasks__column'
        >
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>{title}</p>
          </div>

          <div className='tasks__members'>
            {
              members.map((member, index) => (
                <DraggableTaskMember key={member.id} member={member} index={index} />
                )
              )
            }
          </div>
          {droppableProvided.placeholder}
          
        </div>
        )
      }
      
    </Droppable>
  )
}
