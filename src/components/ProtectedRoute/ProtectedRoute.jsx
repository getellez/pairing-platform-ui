import { useParams, Navigate } from 'react-router-dom';
import { getTokenPayload } from '../../utils/client';
import { urls } from '../../config/urls';

export const ProtectedRoute = ({ children }) => {
  const { dashboardName } = useParams()
  const jwtPayload = getTokenPayload()
  if (jwtPayload?.dashboardName === dashboardName) {
    return children
  } else {
    return <Navigate to={urls.loginPage} replace />
  }
}
