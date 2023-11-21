import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import Service from './routes/Service'
import Error from './routes/Error'
import Flow from './routes/Flow'
import LoginWash from './routes/LoginWash'
import LoginClient from './routes/LoginClient'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Flow />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/loginWash",
        element: <LoginWash />
      },
      {
        path: "/loginClient",
        element: <LoginClient />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
