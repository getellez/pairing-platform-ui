import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { urls } from '../../config/urls';
import { DashboardContext } from '../../context/DashboardContext';

import './Controls.css'
import { darkTheme, lightTheme } from '../../utils/theme';

export const Controls = () => {
  
  const { dashboardData, darkMode } = useContext(DashboardContext)
  const { resetTaskMembers, randomTaskMembers, randomAllTaskMembers, dashboard } = dashboardData
  const btnTextColor = darkMode?darkTheme.textSecondaryColor:lightTheme.textSecondaryColor
  const btnBgColor = darkMode?darkTheme.fourthColor:lightTheme.primaryColor

  const navigate = useNavigate()

  const handleLogout = (e) => {
    localStorage.removeItem('pairing-token')
    navigate(urls.loginPage)
    window.location.reload()
  }
  const handleShuffleAllTaskMembers = () => {
    randomAllTaskMembers()
  }
  const handleShuffleTaskMembers = () => {
    let taskMembersCounter = 0
    for (const task of dashboard.tasks) {
      taskMembersCounter += task.assignedMembers.length
    }
    if (taskMembersCounter === 0) {
      toast.error(`There must be members assigned to tasks` );
    } else {
      randomTaskMembers()
    }
  }
  return (
    <section className='Control' style={{color: btnTextColor}}>
        <Toaster />
        <div style={{backgroundColor: btnBgColor}} className='Control__action' onClick={handleShuffleTaskMembers}>
          <p>Random</p>
        </div>
        <div style={{backgroundColor: btnBgColor}} className='Control__action' onClick={handleShuffleAllTaskMembers}>
          <p>Random All</p>
        </div>
        <div style={{backgroundColor: btnBgColor}} className='Control__action' onClick={resetTaskMembers}>
          <p>Reset</p>
        </div>
        <div style={{backgroundColor: btnBgColor}} className='Control__action' onClick={handleLogout}>
          <p>Logout</p>
        </div>
    </section>
  )
}
