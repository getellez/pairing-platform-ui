import PropTypes from 'prop-types'
import { Draggable } from "react-beautiful-dnd"

export const DraggableMember = ({ member, index }) => {
  return (
    <Draggable draggableId={member.id} index={index}>
      {
        (draggableProvided) => (
          <div
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
          >
            <img
              className='members__avatar'
              src={member.image}
              alt=""
              width={100} />
          </div>
        )
      }
    </Draggable>
  )
}
DraggableMember.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
}