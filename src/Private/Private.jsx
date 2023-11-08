import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({ children }) => {
  const location = useLocation();

  const { user, loding } = useAuth();
  if (loding) {
    return (
      <div className="text-center my-10">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default Private;
