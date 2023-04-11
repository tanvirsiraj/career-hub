import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FeaturedJob from './components/FeaturedJob/FeaturedJob';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import FeaturedJobDetails from './components/FeaturedJobDetails/FeaturedJobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: 'featuredJob/:featuredJobId',
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: ({ params }) => fetch('featuredJobs.json')
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
