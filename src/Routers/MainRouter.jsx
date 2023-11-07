import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddJob from "../Pages/AddJob";
import JobDetails from "../Pages/JobDetails";
import MyBids from "../Pages/MyBids";
import BidRequest from "../Pages/BidRequest";
import MyPosted from "../Pages/MyPosted";
import UpdateJob from "../Components/UpdateJob";
import Profile from "../Pages/Profile";
import Private from "../Private/Private";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addjob",
        element: (
          <Private>
            <AddJob></AddJob>
          </Private>
        ),
      },
      {
        path: "/jobdetails/:id",
        element: (
          <Private>
            <JobDetails></JobDetails>
          </Private>
        ),
      },
      {
        path: "/mybids",
        element: (
          <Private>
            <MyBids></MyBids>
          </Private>
        ),
      },
      {
        path: "/bidrequest",
        element: (
          <Private>
            <BidRequest></BidRequest>
          </Private>
        ),
      },
      {
        path: "/myposted",
        element: (
          <Private>
            <MyPosted></MyPosted>
          </Private>
        ),
      },
      {
        path: "/updatejob/:id",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default MainRouter;
