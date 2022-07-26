import { useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';

export const Controls = () => {
  
  const navigate = useNavigate()

  const handleLogout = (e) => {
    localStorage.removeItem('pairing-token')
    navigate(urls.loginPage)
    window.location.reload()
  }

  return (
    <section className='control'>
        <div className='control__action' onClick={handleLogout}>
          <p>Logout</p>
        </div>
    </section>
  )
}
