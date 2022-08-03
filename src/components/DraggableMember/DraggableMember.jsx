import { Input } from 'antd'
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
            
            <div className='DraggableMember__container'>
              <Input 
                className="DraggableMember__input"
                autoFocus={true}
                htmlSize={15}
                maxLength={15}
                placeholder="Enter a new name"
                bordered={false}
                value={member.name}
                onChange={handleChange}/>
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