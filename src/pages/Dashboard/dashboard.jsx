import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { TasksList } from '../../components/TasksList/TasksList';

import './Dashboard.css'
import { Task } from '../../components/Task/Task';
import { useDashboard } from '../../hooks/useDashboard';

export const Dashboard = () => {
  
  const { dashboard, handleSortMembers, addNewMember } = useDashboard()

  return (
    <DragDropContext onDragEnd={handleSortMembers}>
      <section className='dashboard'>
        <Controls />
        <Members dashboard={dashboard} addNewMember={addNewMember} />
        <TasksList>
          { dashboard?.tasks && 
            dashboard.tasks.map(task => (
                <Task key={task.id} taskId={task.id} title={task.title} members={task.assignedMembers} />
            ))
          }
        </TasksList>
      </section>
    </DragDropContext>
  )
}
