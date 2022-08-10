import { Spin, Tooltip } from 'antd';
import { useContext } from 'react';
import { DroppableMember } from '../DroppableMember/DroppableMember';
import { DashboardContext } from '../../context/DashboardContext';

import './members.css'
import 'antd/lib/spin/style/index.css'
import 'antd/lib/tooltip/style/index.css'

export const Members = () => {
  const { dashboardData, dashboardIsLoading } = useContext(DashboardContext)
  const { addNewMember } = dashboardData;

  return (
      <section className="Members">
        <p className='dasboard__title'>
        <Tooltip className='Members__tooltip' title="People in this section won't be part of the shuffle">
          <span >
            Team members 
          </span>
        </Tooltip> 
        </p>
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
