import { Droppable } from "react-beautiful-dnd"
import { DraggableMember } from "../DraggableMember/DraggableMember"

export const DroppableMember = ({ dashboard }) => {
  return (
    <Droppable droppableId='members' direction='horizontal'>
      {
        (droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="members__container">
            { dashboard?.members &&
              dashboard.members.map((member, index) => (
                <DraggableMember key={member.id} member={member} index={index} />
              ))
            }
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
