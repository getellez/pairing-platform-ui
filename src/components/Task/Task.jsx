import './Task.css'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import { Input } from 'antd'
import 'antd/lib/input/style/index.css'
import { useState } from 'react';

export const Task = ({ id, title, members }) => {
  const [taskTitle, setTaskTitle] = useState('Type new task title...')

  const  handleOnChangeTaskTitle = ({ target }) => {
    setTaskTitle(target.value)
  }

  return (
    <div
      className='tasks__column'
    >
      <div className='tasks__header-container'>
        {/* <p className='tasks__header-title'>{title}</p> */}
        <Input placeholder='Type a new title...' bordered={false} onChange={handleOnChangeTaskTitle} value={taskTitle} />
      </div>
      <DroppableTaskMember id={id} members={members} />
      
    </div>

  )
}
