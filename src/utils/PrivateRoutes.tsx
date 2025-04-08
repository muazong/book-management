import { PagePath } from '@/enums';
import { useAuthContext } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const { user } = useAuthContext();

  return <>{user ? <Outlet /> : <Navigate to={PagePath.Login} />}</>;
}

export default PrivateRoutes;
