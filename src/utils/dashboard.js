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
  const auxTasks = arrayShuffle([...tasks])
  const shuffledMembers = arrayShuffle(members)
  
  while (shuffledMembers.length >= 1) {
    
    if (shuffledMembers.length === 1) {
      const randomIndex = Math.floor(Math.random()*auxTasks.length);
      auxTasks[randomIndex].assignedMembers = [...auxTasks[randomIndex].assignedMembers, shuffledMembers.pop()]
    } else {
      for (const task of auxTasks) {
        if (shuffledMembers.length <= 1) break
        const newMember = shuffledMembers.pop()
        task.assignedMembers = [...task.assignedMembers, newMember]
      }
    }

  }

  return auxTasks
}