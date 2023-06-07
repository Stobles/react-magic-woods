import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import AppRouter from '@routes/AppRouter';

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
