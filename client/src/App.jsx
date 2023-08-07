import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LandingPage from './components/LandingPage';
import AllCourses from './components/AllCourses';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/allcourses", element: <AllCourses /> }
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/adminsignup", element: <AdminSignup /> }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
