import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

import './NewTask.css'
import { darkTheme, lightTheme } from '../../utils/theme';

export const NewTask = () => {
  
  const { dashboardData, darkMode } = useContext(DashboardContext)
  const { addNewTask } = dashboardData;
  const addTaskBgColor = darkMode?darkTheme.thirdColor: lightTheme.fourthColor
  return (
    <div className='NewTask' onClick={addNewTask}>
      <div className='NewTask__header-container' style={{backgroundColor: addTaskBgColor}}>
        <div className="NewTask__add-icon">
          <i className="fa-solid fa-plus"></i>
        </div>
        <p className='NewTask__header-title'>Add a new task</p>
      </div>
    </div>
  )
}
