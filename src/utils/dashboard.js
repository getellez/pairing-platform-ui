import arrayShuffle from 'array-shuffle';

export const getMembersFromTasks = (tasks) => {
  const members = []
  for (const task of tasks) {
    for (const member of task.assignedMembers) {
      if (member) {
        members.push(member)
      }
    }
    task.assignedMembers = []
  }
  return members
}

export const setRandomMembersToTasks = (tasks, members) => {
  const auxTasks = [...tasks]
  const shuffledMembers = arrayShuffle(members)
  
  while (shuffledMembers.length >= 1) {
    for (const task of auxTasks) {
      const newMember = shuffledMembers.pop()
      task.assignedMembers = [...task.assignedMembers, newMember]
      if (shuffledMembers.length < 1) break
    }
  }
  return auxTasks
}