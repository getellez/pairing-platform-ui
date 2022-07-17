import { Input } from 'antd'
import PropTypes from 'prop-types'
import { Draggable } from "react-beautiful-dnd"
import './DraggableMember.css'

export const DraggableMember = ({ member, index }) => {
  return (
    <Draggable draggableId={member.id} index={index}>
      {
        (draggableProvided) => (
          <div
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
            className='draggable__member-container'
          >
            <img
              className='draggable__member-avatar'
              src={member.image}
              alt=""
              width={100} />
            <div className='draggable__member-name-container'>
              <Input htmlSize={10} className="draggable__member-name-input" bordered={false} name='title' value={member.name} />
            </div>

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