import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './pages/App.jsx'
import Login from './pages/Login.jsx'
import SelectScenario from './pages/SelectScenario.jsx'
import EmergencyBag from './pages/EmergencyBag.jsx'
import Inondation from './pages/Inondation.jsx'
import Header from './layout/Header.jsx'

const router = createBrowserRouter([
    {
      path: "/", 
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/selectScenario",
      element: <SelectScenario />,
    },
    {
      path: "/emergency-bag",
      element: <EmergencyBag />,
    },
    {
      path: "/inondation",
      element: <Inondation />,
    },

  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
