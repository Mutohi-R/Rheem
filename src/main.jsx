import { StrictMode } from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.scss'
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/shop',
        element: <Shop />
    }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)