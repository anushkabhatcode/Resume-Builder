import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage.jsx';
import { GetStarted } from './pages/GetStarted.jsx';

const router = createHashRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/getstarted',
        element: <GetStarted />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
