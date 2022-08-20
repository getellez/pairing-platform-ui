import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { Switch } from 'antd';
import { urls } from '../../config/urls';
import { APP_NAME } from '../../utils/constants';
import { DashboardContext } from '../../context/DashboardContext';
import { darkTheme, lightTheme } from '../../utils/theme';

import './navbar.css'
import 'antd/lib/switch/style/index.css'


export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DashboardContext)
  const textColor = darkMode?darkTheme.fourthColor:'white'
  const backgroundColor = darkMode?darkTheme.secondaryColor:lightTheme.primaryColor

  const handleToggleDarkTheme = (e) => {
    setDarkMode(!darkMode)
    localStorage.setItem('pairing-theme', !darkMode)
  }


  return (
    <section className="navbar" style={{backgroundColor}}>
        <div className='navbar__title'>
          <h1>
            <NavLink to={urls.homePage} style={{color: textColor}}>
              <h1 className='App__name'> { APP_NAME } </h1>
            </NavLink>
          </h1>
        </div>
        <div className="navbar__theme">
          <Switch defaultChecked={darkMode} checkedChildren="🌙" unCheckedChildren="☀️" onClick={handleToggleDarkTheme} />
        </div>
    </section>
  )
}
