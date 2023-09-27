import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './LayOut/Mainlayout';
import Homepage from './Page/HomePage/Homepage';
import Statistics from './Page/Statistics Page/Statistics';
import SingleCardpage from './Page/singleCardPage/SingleCardpage';
import Donate from './Page/DonatePage/donatemain/Donate';
import ErrorPage from './Page/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>,
      },
      {
        path:"statistics/:cardId",
        element:<SingleCardpage></SingleCardpage>,
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/donate",
        element:<Donate></Donate>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
