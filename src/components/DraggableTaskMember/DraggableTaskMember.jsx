import { Draggable } from "react-beautiful-dnd"
import { Input } from 'antd';
import 'antd/lib/input/style/index.css'
import { useContext, useState } from "react";
import { DashboardContext } from "../../context/DashboardContext";

export const DraggableTaskMember = ({ member, index, taskId }) => {

  const { dashboardData } = useContext(DashboardContext)
  const { updateTaskMemberName, removeTaskMember } = dashboardData;
  const [memberName, setMemberName] = useState(member.name)
  
  const handleOnChange = (e) => {
    setMemberName(e.target.value)
    updateTaskMemberName(taskId, member.id, e.target.value)
  }
  
  const inputStyle = {
    padding: 0,
    fontWeight: 300,
    fontFamily:'Roboto',
    textAlign: 'center'
  }
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
            <div className="task__members-name">
              <Input 
              style={inputStyle} 
              htmlSize={10}
              maxLength={10}
              placeholder='Type a new name'
              bordered={false}
              value={memberName} 
              onChange={handleOnChange}
              />
            </div>
            <div className="task__member-remove" onClick={() => removeTaskMember(taskId, member.id)}>
              <small>
                <strong>x</strong>
              </small>
            </div>
          </div>
        )
      }
    </Draggable>
  )
}
