import { DroppableMember } from '../DroppableMember/DroppableMember';
import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { Spin } from 'antd';

import './members.css'
import 'antd/lib/spin/style/index.css'

export const Members = () => {
  const { dashboardData, dashboardIsLoading } = useContext(DashboardContext)
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
          {
            dashboardIsLoading
            ? <div className='Members__loading'>
                <Spin className='Members__spin' />
              </div>
            : <DroppableMember />
          }
        </div>
      </section>
  )
}
