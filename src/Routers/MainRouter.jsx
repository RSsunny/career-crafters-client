import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
// import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddJob from "../Pages/AddJob";
import JobDetails from "../Pages/JobDetails";
import MyBids from "../Pages/MyBids";
import BidRequest from "../Pages/BidRequest";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addjob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/mybids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/bidrequest",
        element: <BidRequest></BidRequest>,
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
