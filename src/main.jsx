import { StrictMode } from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/index.scss'
import Home from "./pages/Home/Home.jsx";

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