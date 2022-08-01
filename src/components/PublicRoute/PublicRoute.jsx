import { getTokenPayload } from '../../utils/client';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const token = getTokenPayload()
  if (token) {
    return <Navigate to={`/dashboards/${token.dashboardName}`} replace />
  } else {
    return children
  }

}
