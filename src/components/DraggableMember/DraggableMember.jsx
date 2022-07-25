import { Input } from 'antd'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Draggable } from "react-beautiful-dnd"
import { DashboardContext } from '../../context/DashboardContext'
import './DraggableMember.css'

export const DraggableMember = ({ member, index }) => {
  const { dashboardData } = useContext(DashboardContext)
  const { updateMemberName } = dashboardData;
  const inputStyle = {
    padding: 0,
    fontWeight: 300,
    fontFamily:'Roboto'
  }
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
              <Input style={inputStyle} htmlSize={10} className="draggable__member-name-input" bordered={false} name='title' value={member.name} />
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