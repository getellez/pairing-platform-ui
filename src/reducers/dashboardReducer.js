export const dashboardReducer = (state, action) => {
  
  switch (action.type) {
    case 'add_member':
      console.log('add member!');
      return {...state, members: [...state.members, action.payload]}
    
    case 'initial_state':
      console.log('yes!');
      return action.payload

    case 'move_team_member':
      return action.payload
    }
  return state

}