import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/App.css'
import "./assets/css/Icons.css"
import "./assets/css/Colors.css"
import "./assets/css/Buttons.css"
import "./assets/css/Animations.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";

import Home from "./Home";
import Atividade1 from "./Pages/Atividade1";
import Atividade2 from "./Pages/Atividade2";
import Atividade6 from "./Pages/Atividade6";
import Atividade5 from "./Pages/Atividade5";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/atividade1/",
        element: <Atividade1/>
    },
    {
        path: "/atividade2/",
        element: <Atividade2/>
    },
    {
        path: "/atividade5/",
        element: <Atividade5/>
    },
    {
        path: "/atividade6/",
        element: <Atividade6/>
    }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);