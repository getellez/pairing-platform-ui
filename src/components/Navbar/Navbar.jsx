import { NavLink } from 'react-router-dom'
import { urls } from '../../config/urls';
import './navbar.css'
import { APP_NAME } from '../../utils/constants';

export const Navbar = () => {
  return (
    <section className="navbar">
        <h1>
          <NavLink to={urls.homePage}>
            <h1 className='App__name'> { APP_NAME } </h1>
          </NavLink>
        </h1>
    </section>
  )
}
