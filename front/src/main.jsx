import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Start from './pages/Start.jsx'
import Login from './pages/Login.jsx'
import SelectScenario from './pages/SelectScenario.jsx'
import EmergencyBag from './pages/EmergencyBag.jsx'
import Inondation from './pages/Inondation.jsx'
import Tsunami from './pages/Tsunami.jsx'
import Seisme from './pages/Seisme.jsx'
import Game from './pages/Game.jsx'
import Finish from './pages/Finish.jsx'
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
    {
      path: "/emergency-bag",
      element: <EmergencyBag />,
    },
    {
      path: "/seisme",
      element: <Seisme />,
    },

    {
      path: "/inondation",
      element: <Inondation />,
    },

    {
      path: "/tsunami",
      element: <Tsunami />,
    },

    {
      path: "/game",
      element: <Game />,
    },

    {
      path: "/Finish",
      element: <Finish />,
    },

  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
