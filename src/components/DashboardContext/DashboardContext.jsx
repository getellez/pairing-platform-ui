
import { useState } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { useDashboard } from '../../hooks/useDashboard';

export const DashboardContextProvider = ({ children }) => {
  const [dashboardIsLoading, setDashboardIsLoading] = useState(false)
  const dashboard = useDashboard()

  return (
    <DashboardContext.Provider value={{ dashboardData: dashboard, dashboardIsLoading, setDashboardIsLoading }}>
      { children }
    </DashboardContext.Provider>
  )
}
