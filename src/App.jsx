import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardContextProvider } from './components/DashboardContext/DashboardContext';
import { Login } from './pages/Login/Login';
import { urls } from './config/urls';
import { Signup } from './pages/Signup/Signup';
import { DashboardRouter } from './routers/DashboardRouter';
import { AuthContextProvider } from './components/AuthContext/AuthContext';
import { PublicRoute } from './components/PublicRoute/PublicRoute';

import './App.css'

function App() {

  return (
    <AuthContextProvider>
      <DashboardContextProvider>
        <Routes>
          <Route path={urls.homePage} element={<Navigate to={urls.loginPage} />} />
          <Route path={urls.loginPage} element={
          <PublicRoute>
            <Login />
          </PublicRoute>
          } />
          <Route path={urls.signupPage} element={<Signup />} />
          <Route path='/*' element={<DashboardRouter />} />
        </Routes>
      </DashboardContextProvider>
    </AuthContextProvider>
  )
}

export default App
