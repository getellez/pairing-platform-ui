import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/dashboard';
import { urls } from '../config/urls';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

export const DashboardRouter = () => {
  return (
    <>
      <Routes>
          <Route path={urls.dashboardPage} element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}
