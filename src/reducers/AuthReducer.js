export const authReducer = (state = {}, action) => {
  
  switch (action.type) {
    case 'login':
      return true
    
    case 'logout':
      return false
  
    default:
      state;
  }
};
