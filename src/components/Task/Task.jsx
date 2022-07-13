import './Task.css'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import { Input } from 'antd'
import 'antd/lib/input/style/index.css'
import { useState, useEffect } from 'react';

export const Task = ({ taskId, members, title }) => {
  const [taskTitle, setTaskTitle] = useState('')

  const  handleOnChangeTaskTitle = ({ target }) => {
    setTaskTitle(target.value)
  }

  return (
    <>
    {
      taskId && (
        <div className='tasks__column'>
          <div className='tasks__header-container'>
            <Input placeholder='Type a new title...' bordered={false} name='title' onChange={handleOnChangeTaskTitle} value={taskTitle} />
          </div>
          <DroppableTaskMember id={taskId} members={members} />
        </div>
      )
    }
    </>
    
  )
}
