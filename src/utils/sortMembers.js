export const sortMembers = (source, destination, dashboard) => {
  const dashboardCopy = JSON.parse(JSON.stringify(dashboard))
  
  // Moving a member in the same bench
  if (source.droppableId === destination.droppableId && destination.droppableId === 'members') {
    const [draggedMember] = dashboardCopy.members.splice(source.index, 1)
    dashboardCopy.members.splice(destination.index, 0, draggedMember)
  }
  
  // Moving a member from a task to the bench
  if (source.droppableId !== destination.droppableId && destination.droppableId === 'members') {
    const taskIndex = dashboard.tasks.findIndex(task => task.id === source.droppableId)
    const [draggedMember] = dashboardCopy.tasks[taskIndex].assignedMembers.splice(source.index, 1)
    dashboardCopy.members.splice(destination.index, 0, draggedMember)
  }
  
  // Moving a member from the bench to a task
  if (source.droppableId !== destination.droppableId && source.droppableId === 'members') {
    const taskIndex = dashboardCopy.tasks.findIndex(task => task.id === destination.droppableId)
    const [draggedMember] = dashboardCopy.members.splice(source.index, 1)
    dashboardCopy.tasks[taskIndex].assignedMembers.splice(destination.index, 0, draggedMember)
  }

  // Moving a member between tasks
  if (source.droppableId !== 'members' && destination.droppableId !== 'members') {
    const sourceTaskIndex = dashboardCopy.tasks.findIndex(task => task.id === source.droppableId)
    const [draggedMember] = dashboardCopy.tasks[sourceTaskIndex].assignedMembers.splice(source.index, 1)
    const destinationTaskIndex = dashboardCopy.tasks.findIndex(task => task.id === destination.droppableId)
    dashboardCopy.tasks[destinationTaskIndex].assignedMembers.splice(destination.index, 0, draggedMember)
  }
  
  return dashboardCopy;
}