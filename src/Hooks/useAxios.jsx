import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiousSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  const { logOut } = useAuth() || "";

  useEffect(() => {
    axiousSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response === 401 || error.response === 403) {
          logOut();
        }
      }
    );
  }, [logOut]);
  return axiousSecure;
};

export default useAxios;
