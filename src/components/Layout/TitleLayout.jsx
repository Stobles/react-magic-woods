import { Outlet, useLocation } from 'react-router-dom';
import { routesTitleLayout } from '@routes';
import Title from './Title';

const TitleLayout = () => {
  const location = useLocation();
  const route = routesTitleLayout.find(
    (item) => item.path === location.pathname,
  );
  return (
    <>
      <Title title={route.name} />
      <Outlet />
    </>
  );
};
export default TitleLayout;
