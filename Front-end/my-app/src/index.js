import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage.jsx';

const router = createHashRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
