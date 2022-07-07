import { useState } from 'react';
import { Task } from '../../components/Task/Task';
import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { sortMembers } from '../../utils/sortMembers';
import { NewTask } from '../../components/NewTask/NewTask';
import { initialData } from '../../utils/data'

import monkeyAvatarUrl from './img/monkey_avatar.jpeg';
import monkeyAdidasAvatarUrl from './img/monkey_adidas_avatar.jpeg';
import monkeyOldAvatarUrl from './img/monkey_old_avatar.jpeg';

import './Dashboard.css'

const membersList = [
  { id: '5', name: 'Germán Téllez', img: monkeyAvatarUrl },
  { id: '6', name: 'Mariana Camero', img: monkeyAdidasAvatarUrl },
  { id: '7', name: 'Alejandro Obregón', img: monkeyOldAvatarUrl },
]

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState(initialData)
  const handleSortMembers = ({ source, destination }) => {
    const sortedMembers = sortMembers(source, destination, dashboard.members);
    const newDashboard = dashboard;
    newDashboard.members = sortedMembers;
    setDashboard(newDashboard)
  }

  return (
    <DragDropContext onDragEnd={(handleSortMembers)}>
      <section className='dashboard'>
        <Controls />
        <Members dashboard={dashboard}  />
        <section className='tasks'>
          {
            dashboard.tasks.map(task => (
              <Task key={task.id} title={task.title} members={task.membersAssigned} />
            ))
          }
          {/* <Task title="E2E Testing" members={[ monkeyAvatarUrl, , monkeyAdidasAvatarUrl ]} />
          <Task title="Retro authorization" members={[ monkeyAvatarUrl, monkeyOldAvatarUrl  ]} />
          <Task title="Reconciliation screen" members={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} /> */}
          <NewTask />
        </section>
      </section>
    </DragDropContext>
  )
}
