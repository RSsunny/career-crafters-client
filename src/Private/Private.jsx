import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({ children }) => {
  const location = useLocation();

  const { user, loding } = useAuth();
  if (loding) {
    return <h1>lodding....</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default Private;
