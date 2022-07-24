import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { TasksList } from '../../components/TasksList/TasksList';

import './Dashboard.css'
import { Task } from '../../components/Task/Task';
import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { dashboard, handleSortMembers } = dashboardData;

  return (
    <DragDropContext onDragEnd={handleSortMembers}>
      <section className='dashboard'>
        <Controls />
        <Members />
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
