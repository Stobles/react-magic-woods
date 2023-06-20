import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  routesMainLayout,
  authRoutesMainLayout,
  routesTitleLayout,
  authRoutesTitleLayout,
} from '@routes';
import MainLayout from '@comp/Layout/MainLayout';
import TitleLayout from '@comp/Layout/TitleLayout';
import { Login } from '../../pages';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/auth' element={<Login />} end />
      <Route element={<MainLayout />}>
        {routesMainLayout.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} end />
        ))}
        <Route element={<PrivateRoutes />}>
          {authRoutesMainLayout.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} end />
          ))}
        </Route>
        <Route element={<TitleLayout />}>
          {routesTitleLayout.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} end />
          ))}
          <Route element={<PrivateRoutes />}>
            {authRoutesTitleLayout.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} end />
            ))}
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);

export default AppRouter;
