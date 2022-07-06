import { TasksColumn } from '../../components/TaskColumn/TasksColumn';
import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';

import monkeyAvatarUrl from './img/monkey_avatar.jpeg';
import monkeyAdidasAvatarUrl from './img/monkey_adidas_avatar.jpeg';
import monkeyOldAvatarUrl from './img/monkey_old_avatar.jpeg';

import './dashboard.css'

export const Dashboard = () => {
  return (
    <section className='dashboard'>
      
      <Controls />
      <p className='dasboard__title'>Team members</p>
      
      <Members imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} />
      
      <section className='tasks'>
        <TasksColumn title="Prod support" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} />
        <TasksColumn title="Prod support" imgMembers={[ monkeyAvatarUrl, , monkeyAdidasAvatarUrl ]} />
        <TasksColumn title="Prod support" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl,  ]} />
        <TasksColumn title="Prod support" imgMembers={[ monkeyAvatarUrl, monkeyOldAvatarUrl, monkeyAdidasAvatarUrl ]} />
      </section>

    </section>
  )
}
