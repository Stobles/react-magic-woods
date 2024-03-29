import { Outlet, useLocation } from 'react-router-dom';
import { routesTitleLayout } from '@routes';
import Title from './Title';
import { authRoutesTitleLayout } from '../../routes';

const TitleLayout = () => {
  const location = useLocation();
  const route = routesTitleLayout.find(
    (item) => item.path === location.pathname,
  );
  const authRoute = authRoutesTitleLayout.find(
    (item) => item.path === location.pathname,
  );
  return (
    <>
      <Title title={route?.name ? route?.name : authRoute?.name} />
      <Outlet />
    </>
  );
};
export default TitleLayout;
