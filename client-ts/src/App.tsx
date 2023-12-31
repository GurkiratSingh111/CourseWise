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
import CreateCourse from './components/CreateCourse';
import MyCourses from './components/MyCourses';
import UpdateCourse from './components/UpdateCourse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/allcourses", element: <AllCourses /> },
      { path: "/course/:courseId", element: <Course /> },
      { path: "/admin/createcourse", element: <CreateCourse /> },
      {path: "/admin/updatecourse", element: <UpdateCourse/>},
      { path: "/admin/mycourses", element: <MyCourses /> }
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
      console.log("These are the details", response.data);

      if (response.data.name && response.data.email) {
        setUser({
          userName: response.data.name,
          userEmail: response.data.email,
          role: response.data.role,
          id: response.data._id
        })
      } else {
        setUser({
          userName: null,
          userEmail: null,
          role: null,
          id: null,
        })
      }
    } catch (e) {

      setUser({
        userName: null,
        userEmail: null,
        role: null,
        id: null
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
