import { useContext, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import { useNavigate, useParams } from 'react-router-dom';
import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { TasksList } from '../../components/TasksList/TasksList';
import { Task } from '../../components/Task/Task';
import { DashboardContext } from '../../context/DashboardContext';
import { getTokenPayload, getTokenHeader, sendApiRequest, getDashboardName } from '../../utils/client';
import { urls } from '../../config/urls';

import './dashboard.css'
import { Navbar } from '../../components/Navbar/Navbar';

export const Dashboard = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { dashboard, handleSortMembers, getInitialDashboardData } = dashboardData;
  const navigate = useNavigate()
  const { dashboardName } = useParams()
  useEffect(() => {
    const getDashboard = async () => {
      
      const tokenPayload = getTokenPayload()
      
      if (!tokenPayload) {
        navigate(urls.loginPage)
      } else {
        const authTokenHeader = getTokenHeader()
        const dashboardName = tokenPayload.dashboardName
        const endpoint = `/api/v1/dashboards/${dashboardName}`
        const dashboard = await sendApiRequest.get(endpoint, authTokenHeader)
        
        if (dashboard.statusCode === 200) {
          getInitialDashboardData(dashboard.data)
        } else if(dashboard.statusCode === 401) {
          localStorage.removeItem('pairing-token')
          navigate(urls.loginPage)
        } else {
          /* TODO: Go to a different Unknown Error Page */
          navigate(urls.loginPage)
        }

      }

    }

    getDashboard()
  }, [])

  useEffect(() => {
    
    const updateDashboard = async () => {
      const dashboardName = getDashboardName()
      if (!dashboardName) {
        return 
      }
      const endpoint = `/api/v1/dashboards/${dashboardName}`
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        ...getTokenHeader()
      }
      const response = await sendApiRequest.post(endpoint, dashboard, headers)
      if (response.statusCode !== 201) {
        navigate(urls.loginPage)
      }
    }

    updateDashboard()

  }, [dashboard])

  return (
    <>
      <Navbar />
      <DragDropContext onDragEnd={handleSortMembers}>
        <section className='dashboard'>
          <Controls />
          <Members />
          <TasksList>
            { dashboard?.tasks && 
              dashboard.tasks.map(task => (
                  <Task key={task.id} id={task.id} title={task.title} assignedMembers={task.assignedMembers} />
              ))
            }
          </TasksList>
        </section>
      </DragDropContext>

    </>
  )
}
