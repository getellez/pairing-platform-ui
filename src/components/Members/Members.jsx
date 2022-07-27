import { DroppableMember } from '../DroppableMember/DroppableMember';
import addMemberAvatarUrl from '../../pages/Dashboard/img/add_avatar.jpg';
import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import './members.css'

export const Members = () => {
  const { dashboardData } = useContext(DashboardContext)
  const { addNewMember } = dashboardData;

  return (
      <section className='members'>
        <p className='dasboard__title'>Team members</p>
        <div className="members__container">
          <div className="members__container-add">
            <img 
            className='members__avatar members__new-avatar' 
            onClick={addNewMember}
            src={addMemberAvatarUrl}
            alt="add new member" 
            width={100} />
          </div>
          <DroppableMember />
        </div>
      </section>
  )
}
