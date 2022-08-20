
import { useState } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { useDashboard } from '../../hooks/useDashboard';

export const DashboardContextProvider = ({ children }) => {
  const [dashboardIsLoading, setDashboardIsLoading] = useState(false)
  const dashboard = useDashboard()
  const isDarkMode = localStorage.getItem('pairing-theme') || false
  const [darkMode, setDarkMode] = useState(isDarkMode)

  return (
    <DashboardContext.Provider value={{ dashboardData: dashboard, dashboardIsLoading, setDashboardIsLoading, darkMode, setDarkMode }}>
      { children }
    </DashboardContext.Provider>
  )
}
