import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Input } from 'antd'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import { DashboardContext } from '../../context/DashboardContext';

import 'antd/lib/input/style/index.css'
import './task.css'

export const Task = ({ id, title, assignedMembers }) => {

  const inputRef = useRef()
  const [ task, setTask ] = useState({id, title, assignedMembers})
  const { dashboardData } = useContext(DashboardContext)
  const { updateTaskTitle, removeTask } = dashboardData;

  const handleOnChange = (e) => {
    setTask({
      ...task,
      title: e.target.value
    })
    updateTaskTitle(task.id, e.target.value)

  }
  
  const handleRemoveTask = () => {
    removeTask(task.id)
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
      id && (
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
              value={task.title}
              onChange={handleOnChange}
              />
              <p className='task__header-close' onClick={handleRemoveTask}>
                <small>X</small>
              </p>
            </div>

            <DroppableTaskMember taskId={task.id} members={assignedMembers} />
          </div>
        </div>
      )
    }
    </>
    
  )
}
