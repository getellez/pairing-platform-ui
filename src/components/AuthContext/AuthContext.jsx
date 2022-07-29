import React, { useReducer } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { authReducer } from '../../reducers/AuthReducer';


const init = () => {}

export const AuthContextProvider = ({ children }) => {

  const [isLoggedIn, dispatch] = useReducer(authReducer, {}, init)

  const onLogin = () => {
    dispatch({
      type: 'login',
      payload: {}
    })
  }

  const onLogout = () => {
    dispatch({
      type: 'logout',
      payload: {}
    })
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      onLogin,
      onLogout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
