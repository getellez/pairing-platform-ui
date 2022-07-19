import { useEffect, useReducer } from 'react';
import { sortMembers } from '../utils/sortMembers';
import { v4 as uuidv4 } from 'uuid';
import { dashboardReducer } from '../reducers/dashboardReducer';


export const useDashboard = () => {
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
        "title": 'New Task',
        "assignedMembers": []
      }
    })
  }

  const addNewMember = () => {
    dispatch({
      type: 'add_member',
      payload: {
        "id": `member-${uuidv4()}`,
        "name": 'Anonymous',
        "image": 'https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff2a12bc39c3ff457ae36_Bored%20Ape%208622-%20Image%202.png'
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

  useEffect(() => {
    const getDashboard = async () => {
      const result = await fetch('http://localhost:3001/api/v1/dashboards/1')
      const data = await result.json()
      dispatch({
        type: 'initial_state',
        payload: data
      })
    }
    getDashboard()
  }, [])

  useEffect(() => {
    const updateDashboard = async () => {
      const result = fetch('http://localhost:3001/api/v1/dashboards/1', {
        method: "POST",
        body: JSON.stringify(dashboard),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const data = await (await result).json()
    }
    updateDashboard()
  }, [dashboard])
  

  return {
    dashboard,
    handleSortMembers,
    addNewMember,
    addNewTask,
    updateTaskTitle
  }
}
