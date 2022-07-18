import { useContext } from "react"
import { DashboardContext } from '../../context/DashboardContext';

export const Home = () => {
  const { dashboardData } = useContext(DashboardContext)
  const { dashboard } = dashboardData;
  return (
    <>
    <h1>Pagina principal! </h1>
    <hr />
    <pre>
      {
        dashboard.title
      }
    </pre>
    </>
  )
}
