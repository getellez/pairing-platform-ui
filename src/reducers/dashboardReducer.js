import { getMembersFromTasks, setRandomMembersToTasks } from "../utils/dashboard";

export const dashboardReducer = (state, action) => {
  
  let newState = { ...state };
  let taskMembers = []

  switch (action.type) {
    case 'add_member':
      return {...state, members: [...state.members, action.payload]}
    case 'initial_state':
      return action.payload
    case 'move_team_member':
      return action.payload
    case 'add_task':
      return {...state, tasks: [...state.tasks, action.payload]}
    case 'update_task_member_name':
      for (let i = 0; i < newState.tasks.length; i++) {
        const task = newState.tasks[i];
        if (task.id === action.payload.taskId) {
          const memberIndex = task.assignedMembers.findIndex(member => member.id === action.payload.memberId)
          task.assignedMembers[memberIndex].name = action.payload.newMemberName
          if (!action.payload.newMemberName) {
            task.assignedMembers[memberIndex].image = `https://ui-avatars.com/api/?background=7FC8F8&name=${encodeURIComponent('?')}`
          } else {
            task.assignedMembers[memberIndex].image = `https://ui-avatars.com/api/?background=7FC8F8&name=${encodeURIComponent(action.payload.newMemberName)}`
          }
          
        }
      }
      return newState
    case 'update_bench_member':
      const benchMembers = newState.members.map(m => {
        if (m.id === action.payload.id) {
          return action.payload
        }
        return m
      })
      newState.members = benchMembers
      return newState
    case 'update_task_title':
      const newTasks = newState.tasks.map(task => {
        if (task.id == action.payload.taskId) {
          task.title = action.payload.taskTitle
        }
        return task
      })
      newState.tasks = newTasks
      return newState
    case 'remove_task':
      const taskIndex = newState.tasks.findIndex(task => task.id === action.payload.taskId)
      const assignedMembers = newState.tasks[taskIndex].assignedMembers
      newState.members = [...newState.members, ...assignedMembers]
      newState.tasks.splice(taskIndex, 1)
      return newState
    case 'remove_bench_member':
      const memberIndex = newState.members.findIndex(member => member.id === action.payload.memberId)
      newState.members.splice(memberIndex, 1)
      return newState
    case 'remove_task_member':
      const taskIdx = newState.tasks.findIndex(task => task.id === action.payload.taskId)
      const memberIdx = newState.tasks[taskIdx].assignedMembers.findIndex(member => member.id === action.payload.memberId)
      newState.tasks[taskIdx].assignedMembers.splice(memberIdx, 1)
      return newState
    case 'reset_task_members':
      for (const task of newState.tasks) {
        task.assignedMembers.map((member, index) => {
          taskMembers.push(member)
        })
        task.assignedMembers = []
      }
      newState.members = [...newState.members, ...taskMembers]
      return newState
    case 'random_task_members':
      taskMembers = getMembersFromTasks(newState.tasks)
      const tasksWithRandomMembers = setRandomMembersToTasks(newState.tasks, taskMembers)
      newState.tasks = tasksWithRandomMembers
      return newState

    }


  return state
}