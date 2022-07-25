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
    
    case 'update_member_name':
      const customState = { ...state };
      for (let i = 0; i < customState.tasks.length; i++) {
        const task = customState.tasks[i];
        if (task.id === action.payload.taskId) {
          const memberIndex = task.assignedMembers.findIndex(member => member.id === action.payload.memberId)
          task.assignedMembers[memberIndex].name = action.payload.newMemberName
        }
      }
      return customState

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