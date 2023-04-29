import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  //Link,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from './pages/Single';
import Home from './pages/Home'
import Login from "./pages/Login";
import Write from './pages/Write'
import Register from "./pages/Register";
import './style.scss'

const Layout = () => {
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '/single',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      },
     
    ] 
  },
  {
    path: '/login',
    element: <Login />
  },
 
  {
    path: '/register',
    element: <Register />
  }
]);

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
