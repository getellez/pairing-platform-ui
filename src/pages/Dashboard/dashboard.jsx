import { useState } from 'react';
import { Task } from '../../components/Task/Task';
import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { sortMembers } from '../../utils/sortMembers';
import { NewTask } from '../../components/NewTask/NewTask';


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
  const [members, setMembers] = useState(membersList)
  
  const handleSortMembers = ({ source, destination }) => {
    const sortedMembers = sortMembers(source, destination, members)
    setMembers([...sortedMembers])
  }

  return (
    <DragDropContext onDragEnd={handleSortMembers}>
      <section className='dashboard'>
        <Controls />
        <p className='dasboard__title'>Team members</p>
        <Members members={members} />
        <section className='tasks'>
          <Task title="Prod support" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} />
          <Task title="E2E Testing" imgMembers={[ monkeyAvatarUrl, , monkeyAdidasAvatarUrl ]} />
          <Task title="Retro authorization" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl  ]} />
          <Task title="Reconciliation screen" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} />
          <NewTask />
        </section>
      </section>
    </DragDropContext>
  )
}
