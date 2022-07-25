import { Input } from 'antd'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { Draggable } from "react-beautiful-dnd"
import { DashboardContext } from '../../context/DashboardContext'
import './DraggableMember.css'

export const DraggableMember = ({ member, index }) => {
  const { dashboardData } = useContext(DashboardContext)
  const { updateBenchMemberName } = dashboardData;
  const [memberName, setMemberName] = useState(member.name)
  
  const handleChange = ({ target }) => {
    setMemberName(target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    updateBenchMemberName(member.id, memberName)
  }
  
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
              alt={memberName}
              width={100} />
            {/* <div className='draggable__member-name-container'> */}
            <form onSubmit={handleSubmit}>
              <Input style={inputStyle} htmlSize={10} className="draggable__member-name-input" bordered={false} onChange={handleChange} value={memberName} />
            </form>
            {/* </div> */}

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