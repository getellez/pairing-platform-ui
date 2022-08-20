import { Spin, Tooltip } from 'antd';
import { useContext } from 'react';
import { DroppableMember } from '../DroppableMember/DroppableMember';
import { DashboardContext } from '../../context/DashboardContext';

import './members.css'
import 'antd/lib/spin/style/index.css'
import 'antd/lib/tooltip/style/index.css'
import { darkTheme, lightTheme } from '../../utils/theme';

export const Members = () => {
  const { dashboardData, dashboardIsLoading, darkMode } = useContext(DashboardContext)
  const { addNewMember } = dashboardData;
  const textColor = darkMode?darkTheme.textPrimaryColor:lightTheme.textPrimaryColor
  const taskBgColor = darkMode?darkTheme.secondaryColor:lightTheme.thirdColor
  const addBtnBgColor = darkMode?darkTheme.thirdColor:lightTheme.secondaryColor

  return (
      <section className="Members" style={{color: textColor}}>
        <p>
        <Tooltip className='Members__tooltip' title="People in this section won't be part of the shuffle">
          <span >
            Team members 
          </span>
        </Tooltip> 
        </p>
        <div className="Members__container" style={{backgroundColor: taskBgColor}}>
          <div 
            onClick={addNewMember}
            className="Members__add-container">
            <i style={{backgroundColor: addBtnBgColor}} className="Members__add-icon fa-solid fa-plus"></i>
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
