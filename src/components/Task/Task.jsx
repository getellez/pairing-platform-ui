import { Input } from 'antd'
import { DroppableTaskMember } from '../DroppableTaskMember/DroppableTaskMember';
import 'antd/lib/input/style/index.css'
import './Task.css'

export const Task = ({ taskId, members, title }) => {

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
              <Input style={inputStyle} placeholder='Type a new title...' bordered={false} name='title' value={title} />
            </div>
            <DroppableTaskMember id={taskId} members={members} />
          </div>
        </div>
      )
    }
    </>
    
  )
}
