import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar';
import { DashboardContextProvider } from './components/DashboardContext/DashboardContext';
import { Login } from './pages/Login/Login';
import { urls } from './config/urls';

import './App.css'

function App() {

  return (
    <DashboardContextProvider>
      <Navbar />
      <Routes>
        <Route path={urls.homePage} element={<Home />} />
        <Route path={urls.loginPage} element={<Login />} />
        <Route path={urls.dashboardPage} element={<Dashboard />} />
      </Routes>
    </DashboardContextProvider>
  )
}

export default App
