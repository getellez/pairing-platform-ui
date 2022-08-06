import { useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';
import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

export const Controls = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { resetTaskMembers, randomTaskMembers } = dashboardData
  const navigate = useNavigate()

  const handleLogout = (e) => {
    localStorage.removeItem('pairing-token')
    navigate(urls.loginPage)
    window.location.reload()
  }

  return (
    <section className='control'>
        <div className='control__action' onClick={randomTaskMembers}>
          <p>Random</p>
        </div>
        <div className='control__action' onClick={resetTaskMembers}>
          <p>Reset</p>
        </div>
        <div className='control__action' onClick={handleLogout}>
          <p>Logout</p>
        </div>
    </section>
  )
}
