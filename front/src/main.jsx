import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Start from './pages/start/start.jsx'
import Login from './pages/Login.jsx'
import SelectScenario from './pages/SelectScenario.jsx'
import Header from './layout/Header.jsx'

const router = createBrowserRouter([
    {
      path: "/", 
      element: <Start />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/selectScenario",
      element: <SelectScenario />,
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
