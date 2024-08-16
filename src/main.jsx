import { StrictMode } from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
