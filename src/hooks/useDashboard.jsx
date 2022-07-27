import { useEffect, useReducer } from 'react';
import { sortMembers } from '../utils/sortMembers';
import { v4 as uuidv4 } from 'uuid';
import { dashboardReducer } from '../reducers/dashboardReducer';
import { sendApiRequest, getDashboardName, getTokenPayload, getTokenHeader } from '../utils/client';
import { useNavigate } from 'react-router-dom';
import { urls } from '../config/urls';

export const useDashboard = () => {
  
  const navigate = useNavigate()
  const [dashboard, dispatch] = useReducer(dashboardReducer,{})
  
  const handleSortMembers = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    const sortedDashboard = sortMembers(source, destination, dashboard);
    dispatch({
      type: 'move_team_member',
      payload: sortedDashboard
    })
    
  }

  const addNewTask = () => {
    dispatch({
      type: 'add_task',
      payload: {
        "id": `task-${uuidv4()}`,
        "title": '',
        "assignedMembers": []
      }
    })
  }

  const addNewMember = () => {
    dispatch({
      type: 'add_member',
      payload: {
        "id": `member-${uuidv4()}`,
        "name": "",
        "image": "https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff2a12bc39c3ff457ae36_Bored%20Ape%208622-%20Image%202.png"
      }
    })
  }

  const updateTaskTitle = (taskId, taskTitle) => {
    dispatch({
      type: 'update_task_title',
      payload: {
        taskId,
        taskTitle
      }
    })
  }

  const updateTaskMemberName = (taskId, memberId, newMemberName) => {
    dispatch({
      type: 'update_task_member_name',
      payload: {
        taskId,
        memberId,
        newMemberName
      }
    })
  }

  const updateBenchMemberName = (memberId, newMemberName) => {
    dispatch({
      type: 'update_bench_member_name',
      payload: {
        memberId,
        newMemberName
      }
    })
  }

  const removeTask = (taskId) => {
    dispatch({
      type: 'remove_task',
      payload: {
        taskId
      }
    })
  }

  const removeBenchMember = (memberId) => {
    dispatch({
      type: 'remove_bench_member',
      payload: {
        memberId
      }
    })
  }

  const removeTaskMember = (taskId, memberId) => {
    dispatch({
      type: 'remove_task_member',
      payload: {
        taskId,
        memberId
      }
    })
  }

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
            dispatch({
              type: 'initial_state',
              payload: dashboard.data
            })
          } else {
            navigate(urls.loginPage)
            localStorage.removeItem('paring-token')
          }
        } else {
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
  
  return {
    dashboard,
    handleSortMembers,
    addNewMember,
    addNewTask,
    updateTaskTitle,
    updateTaskMemberName,
    updateBenchMemberName,
    removeTask,
    removeBenchMember,
    removeTaskMember
  }
}
