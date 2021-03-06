import { DroppableMember } from '../DroppableMember/DroppableMember';
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
          <div 
            onClick={addNewMember}
            className="members__container-add">
            <i className="fa-solid fa-plus"></i>
          </div>
          <DroppableMember />
        </div>
      </section>
  )
}
