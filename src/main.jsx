import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import InputForm from './Components/Form/InputForm.jsx';
import PlayContent from './Components/PlayContent.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inputFrom",
    element: <InputForm />,
  },
  {
    path: "/playContent",
    element: <PlayContent />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
