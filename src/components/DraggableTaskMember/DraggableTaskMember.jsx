import { Draggable } from "react-beautiful-dnd"

export const DraggableTaskMember = ({ member, index }) => {
  return (
    <Draggable  draggableId={member.id} index={index}>
      {
        (draggableProvided) => (
          <div
            className='task__members-container'
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}>
              
            <img className='task__members-avatar' src={member.image} alt={member.name} width={70} />
            <div className="task__members-name"><small>{member.name}</small></div>
          </div>
        )
      }
    </Draggable>
  )
}
