
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
import Client from './routes/Client'
import Wash from './routes/Wash'
import ClientFlow from './routes/ClientFlow'

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
      },
      {
        path: "/Wash",
        element: <Wash />
      },
      {
        path: "/Client",
        element: <Client />
      },
      {
        path: "/ClientFlow/:item",
        element: <ClientFlow />
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
