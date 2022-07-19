import { useContext } from 'react';
import { useState } from 'react';
import { Input } from 'antd'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import { DashboardContext } from '../../context/DashboardContext';

import 'antd/lib/input/style/index.css'
import './Task.css'

export const Task = ({ taskId, members, title }) => {

  const [taskTitle, setTaskTitle] = useState(title)

  const { dashboardData } = useContext(DashboardContext)
  const { updateTaskTitle } = dashboardData;

  const handleOnChange = (e) => {
    setTaskTitle(e.target.value)
  }
  
  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      updateTaskTitle(taskId, taskTitle)
    }
  }

  const inputStyle = {
    padding: 0,
    fontWeight: 300,
    fontFamily:'Roboto'
  }

  return (
    <>
    {
      taskId && (
        <div className='task__column'>
          <div className='task__wrapper'>
            <div className='task__header-container'>
              <Input style={inputStyle} placeholder='Type a new title...' bordered={false} value={taskTitle} onChange={handleOnChange} onKeyDown={handlePressEnter} />
            </div>
            <DroppableTaskMember id={taskId} members={members} />
          </div>
        </div>
      )
    }
    </>
    
  )
}
