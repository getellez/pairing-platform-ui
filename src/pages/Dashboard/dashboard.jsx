import { useState } from 'react';
import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { sortMembers } from '../../utils/sortMembers';
import { initialData } from '../../utils/data'
import { TasksList } from '../../components/TasksList/TasksList';

import './Dashboard.css'

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState(initialData)
  
  const handleSortMembers = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    const sortedDashboard = sortMembers(source, destination, dashboard);
    setDashboard(sortedDashboard)
    
  }

  return (
    <DragDropContext onDragEnd={(handleSortMembers)}>
      <section className='dashboard'>
        <Controls />
        <Members dashboard={dashboard}  />
        <TasksList dashboard={dashboard} />
      </section>
    </DragDropContext>
  )
}
