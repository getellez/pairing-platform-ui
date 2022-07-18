import { NavLink } from 'react-router-dom'
import { urls } from '../../config/urls';
import './navbar.css'

export const Navbar = () => {
  return (
    <section className="navbar">
        <h1>
          <NavLink to={urls.homePage}>
            Pairing Platform
          </NavLink>
        </h1>
    </section>
  )
}
