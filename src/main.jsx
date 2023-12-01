
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './routes/Error'
import Flow from './routes/Flow'
import Client from './routes/Client'
import Wash from './routes/Wash'
import ClientFlow from './routes/ClientFlow'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Flow />
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
