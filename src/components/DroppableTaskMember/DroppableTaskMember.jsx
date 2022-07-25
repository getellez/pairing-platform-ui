import { Droppable } from 'react-beautiful-dnd';
import { DraggableTaskMember } from '../DraggableTaskMember/DraggableTaskMember';

export const DroppableTaskMember = ({ id, members }) => {
  return (
    <Droppable droppableId={id} direction='horizontal'>
      {
        (droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className='task__members'>
            { members && 
              members.map((member, index) => (
                <DraggableTaskMember key={member.id} member={member} index={index} taskId={id} />
              ))
            }
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
