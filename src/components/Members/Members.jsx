import { DroppableMember } from '../DroppableMember/DroppableMember';
import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import './members.css'

export const Members = () => {
  const { dashboardData } = useContext(DashboardContext)
  const { addNewMember } = dashboardData;

  return (
      <section className="Members">
        <p className='dasboard__title'>Team members</p>
        <div className="Members__container">
          <div 
            onClick={addNewMember}
            className="Members__add-container">
            <i className="Members__add-icon fa-solid fa-plus"></i>
          </div>
          <DroppableMember />
        </div>
      </section>
  )
}
