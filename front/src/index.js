import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/inter';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import VehiclesSearch from './pages/VehiclesSearch';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ErrorPage from "./pages/ErrorPage";
import { CssVarsProvider } from '@mui/joy';
import theme from './theme';
import Layout from './components/layout/Layout';
import VehicleAnnouncement from './pages/VehicleAnnouncement';

const myRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{
        path: "/",
        element: <Home />,
      },
      {
        path: "/vehicles/search",
        element: <VehiclesSearch />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/vehicles/:vehiclesId",
        element: <VehicleAnnouncement />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <RouterProvider router={myRouter} />
    </CssVarsProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
