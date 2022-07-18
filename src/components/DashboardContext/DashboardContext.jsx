
import { DashboardContext } from '../../context/DashboardContext';
import { useDashboard } from '../../hooks/useDashboard';

export const DashboardContextProvider = ({ children }) => {
  
  const dashboard = useDashboard()

  return (
    <DashboardContext.Provider value={{ dashboardData: dashboard }}>
      { children }
    </DashboardContext.Provider>
  )
}
