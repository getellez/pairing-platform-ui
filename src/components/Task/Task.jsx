import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Input } from 'antd'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import { DashboardContext } from '../../context/DashboardContext';

import 'antd/lib/input/style/index.css'
import './task.css'

export const Task = ({ taskId, members, title }) => {

  const inputRef = useRef()
  const [taskTitle, setTaskTitle] = useState(title)
  const { dashboardData } = useContext(DashboardContext)
  const { updateTaskTitle, removeTask } = dashboardData;

  const handleOnChange = (e) => {
    setTaskTitle(e.target.value)
    updateTaskTitle(taskId, e.target.value)
  }
  
  const handleRemoveTask = () => {
    removeTask(taskId)
  }
  
  useEffect(() => {
    
    const input = inputRef.current.input

    if(input.value !== '') {
      input.blur()
    } else {
      input.focus()
    }
  }, [])
  


  const inputStyle = {
    padding: 0,
    fontWeight: 300,
    fontFamily:'Roboto',
    width: '50%'
  }

  return (
    <>
    {
      taskId && (
        <div className='task__column'>
          <div className='task__wrapper'>
            
            <div className='task__header-container'>

              <Input 
              ref={inputRef}
              autoFocus={true}
              style={inputStyle}
              htmlSize={50}
              maxLength={50}
              placeholder="¿What's the name of this task?"
              bordered={false}
              value={taskTitle}
              onChange={handleOnChange}
              />
              <p className='task__header-close' onClick={handleRemoveTask}>
                <small>X</small>
              </p>
            </div>

            <DroppableTaskMember id={taskId} members={members} />
          </div>
        </div>
      )
    }
    </>
    
  )
}
