import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";

import App from './App';
import Atividade1 from "./Pages/Atividade1";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/atividade1/",
        element: <Atividade1/>
    }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);