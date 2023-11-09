import { useEffect, useState } from "react";
import Drack from "./Drack";
import Manu from "./Manu";
import MobileManu from "./MobileManu";
import Notification from "./Notification";
import User from "./User";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [issticky, setSticky] = useState(false);
  const location = useLocation();
  const handleStickey = () => {
    clearTimeout(window.scroolTimeout);
    window.scrollTimeout = setTimeout(() => {
      if (window.scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickey);
    return () => {
      window.removeEventListener("scroll", handleStickey);
    };
  }, []);
  const locattion = useLocation();

  return (
    <div
      className={`border-b md:py-5  w-full ${
        locattion?.pathname === "/" && "text-white"
      }   duration-1000 ease-linear   z-50  ${
        issticky ? "sticky bg-gray-200    top-0  " : ""
      }`}
    >
      <div
        className={`flex justify-between items-center gap-2 md:gap-5 ml-2 md:mx-2 lg:mx-20 ${
          issticky ? "text-black " : ""
        }`}
      >
        {/* logo */}
        <div>
          <h1 className="text-lg md:text-4xl font-bold font-playfair">
            Career <span className="text-green-500">Crafters</span>
          </h1>
        </div>
        <Manu></Manu>
        <div className="flex items-center gap-3 md:gap-8 ">
          <Drack></Drack>
          {/* <Notification></Notification> */}
          <User></User>
          <div className="cursor-pointer hidden md:block">
            <h1 className="border border-green-500 text-green-500 font-playfair  font-bold  px-4 py-2">
              Upload Resume
            </h1>
          </div>
          <div className="md:hidden">
            <MobileManu></MobileManu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
