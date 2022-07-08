export const sortMembers = (source, destination, dashboard) => {
  const dashboardCopy = Object.assign(dashboard);
  
  // Moving a member in the same bench
  if (source.droppableId === destination.droppableId && destination.droppableId === 'members') {
    const [draggedMember] = dashboardCopy.members.splice(source.index, 1)
    dashboardCopy.members.splice(destination.index, 0, draggedMember)
  }
  // Moving a member from a task to the bench
  if (source.droppableId !== destination.droppableId && destination.droppableId === 'members') {
    const task = dashboard.tasks.find(task => task.id === source.droppableId)
    const [draggedMember] = task.assignedMembers.splice(source.index,1)
    dashboardCopy.members.splice(destination.index,0,draggedMember)
  }
  
  // Moving a member from the bench to a task
  if (source.droppableId !== destination.droppableId && source.droppableId === 'members') {
    const [draggedMember] = dashboardCopy.members.splice(source.index, 1)
    for (let i = 0; i < dashboardCopy.tasks.length; i++) {
      const task = dashboardCopy.tasks[i];
      if (task.id === destination.droppableId) {
        task.assignedMembers.splice(destination.index, 0, draggedMember)
      }
    }
  }

  // Moving a member between tasks
  if (source.droppableId !== 'members' && destination.droppableId !== 'members') {
    const sourceTaskId = source.droppableId;
    const destinationTaskId = destination.droppableId;
    const sourceTask = dashboardCopy.tasks.find(task => task.id === sourceTaskId)
    const [draggedMember] = sourceTask.assignedMembers.splice(source.index, 1)
    
    for (let i = 0; i < dashboardCopy.tasks.length; i++) {
      let task = Object.assign(dashboardCopy.tasks[i])
      if (task.id === destinationTaskId) {
        task.assignedMembers.splice(destination.index, 0, draggedMember)
      }
    }
  }

  return dashboardCopy;
}