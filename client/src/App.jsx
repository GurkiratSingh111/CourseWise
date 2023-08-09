import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LandingPage from './components/LandingPage';
import AllCourses from './components/AllCourses';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';
import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import Course from './components/Course';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/allcourses", element: <AllCourses /> },
      { path: "/course/:courseId", element: <Course /> }
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/adminsignup", element: <AdminSignup /> }

]);

function App() {
  const setUser = useSetRecoilState(userState);
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/me", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })

      if (response.data.name && response.data.email) {
        setUser({
          userName: response.data.name,
          userEmail: response.data.email
        })
      } else {
        setUser({
          userName: null,
          userEmail: null
        })
      }
    } catch (e) {

      setUser({
        userName: null,
        userEmail: null
      })
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
