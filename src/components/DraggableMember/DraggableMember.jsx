import { Input } from 'antd'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { Draggable } from "react-beautiful-dnd"
import { DashboardContext } from '../../context/DashboardContext'
import './DraggableMember.css'

export const DraggableMember = ({ teamMember, index }) => {
  const { dashboardData } = useContext(DashboardContext)
  const { updateBenchMember, removeBenchMember } = dashboardData;

  const [member, setMember] = useState(teamMember)
  
  const handleChange = ({ target }) => {
    let imageUrl;
    if (!target.value) {
      imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent('?')}`
    } else {
      imageUrl = `https://ui-avatars.com/api/?background=7FC8F8&name=${encodeURIComponent(target.value)}`
    }
    setMember({
      ...member,
      image: imageUrl,
      name: target.value
    })
    updateBenchMember({
      ...member,
      image: imageUrl,
      name: target.value
    })
  }
  
  const inputStyle = {
    margin: 0,
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
              alt={member.name}
              width={100} />
            
            <div>
              <Input 
              autoFocus={true}
              style={inputStyle}
              htmlSize={15}
              maxLength={15}
              className="draggable__member-name-input"
              bordered={false}
              onChange={handleChange}
              value={member.name}
              placeholder="Enter a new name"
              />
            </div>
            <div className='draggable__member-remove' onClick={() => removeBenchMember(member.id)}>
              <small>x</small>
            </div>

          </div>
        )
      }
    </Draggable>
  )
}