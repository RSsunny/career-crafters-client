import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname;
    if (location.pathname === "/") {
      document.title = `Career Crafters`;
    } else {
      document.title = `${location.pathname.replace("/", "")}`;
    }
  }, [location]);
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
