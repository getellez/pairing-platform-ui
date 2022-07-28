import { Droppable } from 'react-beautiful-dnd';
import { DraggableTaskMember } from '../DraggableTaskMember/DraggableTaskMember';

export const DroppableTaskMember = ({ taskId, members }) => {
  return (
    <Droppable droppableId={taskId} direction='horizontal'>
      {
        (droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className='task__members'>
            { members && 
              members.map((member, index) => (
                <DraggableTaskMember key={member.id} member={member} index={index} taskId={taskId} />
              ))
            }
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
