import { Draggable } from "react-beautiful-dnd"

export const DraggableTaskMember = ({ member, index }) => {
  return (
    <Draggable  draggableId={member.id} index={index}>
      {
        (draggableProvided) => (
          <div
            className='tasks__members-container'
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}>
            <img className='tasks__members-avatar' src={member.image} alt={member.name} width={70} />
          </div>
        )
      }
    </Draggable>
  )
}