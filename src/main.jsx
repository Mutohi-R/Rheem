import { StrictMode } from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.scss'
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
      path: '/contact',
      element: <Contact />
    }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)