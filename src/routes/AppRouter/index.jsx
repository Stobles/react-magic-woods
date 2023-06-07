import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  authRoutesMainLayout,
  routesMainLayout,
  routesTitleLayout,
} from '@routes';
import MainLayout from '@comp/Layout/MainLayout';
import TitleLayout from '@comp/Layout/TitleLayout';
import { Login } from '../../pages';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/auth' element={<Login />} end />
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
      </Route>
    </Route>,
  ),
);

export default AppRouter;
