import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to='/auth' replace />;
};

export default PrivateRoutes;
