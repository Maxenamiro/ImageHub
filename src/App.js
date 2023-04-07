import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { Root } from './routes/root';
import { SignUp } from './routes/sign-up';
import { SignIn } from './routes/sign-in';
import { ForgotPassword } from './routes/forgot-password';
import { Header } from './components/Header';
import { MainPage } from './routes/main-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/Header',
    element: <Header />,
  },
  {
    path: '/main-page',
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
