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
            className='tasks__members'>
            {
              members.map((member, index) => (
                <DraggableTaskMember key={member.id} member={member} index={index} />
              ))
            }
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
