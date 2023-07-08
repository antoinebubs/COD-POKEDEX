import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Login, Register, Home} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
        <Home />
    ),
  },
  {
    path: '/register',
    element: (
        <Register />
    ),
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}