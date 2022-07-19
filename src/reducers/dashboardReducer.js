export const dashboardReducer = (state, action) => {
  
  switch (action.type) {
    case 'add_member':
      return {...state, members: [...state.members, action.payload]}
    
    case 'initial_state':
      return action.payload

    case 'move_team_member':
      return action.payload

    case 'add_task':
      return {...state, tasks: [...state.tasks, action.payload]}
    
    case 'update_task_title':
      const newState = {...state}
      const newTasks = newState.tasks.map(task => {
        if (task.id == action.payload.taskId) {
          task.title = action.payload.taskTitle
        }
        return task
      })
      newState.tasks = newTasks
      return newState
    }

  return state
}