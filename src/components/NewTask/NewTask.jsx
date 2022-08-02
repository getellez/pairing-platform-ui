import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

import './NewTask.css'

export const NewTask = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { addNewTask } = dashboardData;

  return (
    <div className='NewTask' onClick={addNewTask}>
      <div className='NewTask__header-container'>
        <div className="NewTask__add-icon">
          <i class="fa-solid fa-plus"></i>
        </div>
        <p className='NewTask__header-title'>Add a new task</p>
      </div>
    </div>
  )
}
