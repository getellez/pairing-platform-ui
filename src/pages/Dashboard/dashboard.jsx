import { Members } from '../../components/Members/Members';
import { Controls } from '../../components/Controls/Controls';
import { DragDropContext } from 'react-beautiful-dnd'
import { TasksList } from '../../components/TasksList/TasksList';

import './Dashboard.css'
import { Task } from '../../components/Task/Task';
import { useContext, useEffect } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { getTokenPayload, getTokenHeader, sendApiRequest, getDashboardName } from '../../utils/client';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';

export const Dashboard = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { dashboard, handleSortMembers, getInitialDashboardData } = dashboardData;
  const navigate = useNavigate()

  useEffect(() => {
    const getDashboard = async () => {
      const tokenPayload = getTokenPayload()
      if (tokenPayload) {
        const dashboardName = tokenPayload.dashboardName
        const endpoint = `/api/v1/dashboards/${dashboardName}`
        const authTokenHeader = getTokenHeader()
        if (authTokenHeader) {
          const dashboard = await sendApiRequest.get(endpoint, authTokenHeader)
          if (dashboard.statusCode === 200) {
            getInitialDashboardData(dashboard.data)
          } else {
            navigate(urls.loginPage)
            localStorage.removeItem('paring-token')
          }
        } else {
          navigate(urls.loginPage)
        }
      } else {
        navigate(urls.loginPage)
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
  )
}
