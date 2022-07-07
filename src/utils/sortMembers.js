export const sortMembers = (source, destination, members) => {
  if (!destination) {
    return;
  }
  if (source.index === destination.index && source.droppableId === destination.droppableId) {
    return;
  }
  
  const membersCopy = [...members];
  const [draggedMember] = membersCopy.splice(source.index,1);
  membersCopy.splice(destination.index, 0, draggedMember);

  return membersCopy;
}