import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import AboutUs from './pages/AboutUs/AboutUs/AboutUs';
import Home from './pages/Home/Home/Home';
import Contact from './pages/Contact/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
