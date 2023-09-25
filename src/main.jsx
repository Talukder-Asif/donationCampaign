import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './LayOut/Mainlayout';
import Homepage from './Page/HomePage/Homepage';
import DonationPage from './Page/Donation page/DonationPage';
import Statistics from './Page/Statistics Page/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>,
      },
      {
        path: "/donation",
        element:<DonationPage></DonationPage>,
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
