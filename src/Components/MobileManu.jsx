import { NavLink, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { useState } from "react";
const MobileManu = () => {
  const navigate = useNavigate();
  const handleCros = () => {
    navigate(-1);
  };

  // --------------------------
  // const [open, setOpen] = useState(false);

  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="  w-8 h-8  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-full min-h-full bg-base-200 text-center flex justify-center items-center relative">
            {/* Sidebar content here */}

            <ImCross
              onClick={handleCros}
              className="absolute top-8 right-8 text-2xl text-green-500"
            ></ImCross>
            <div className="flex flex-col gap-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-500 border-b-2 pb-1  border-green-500 duration-100 ease-linear "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addjob"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-500 border-b-2  border-green-500 duration-100 ease-linear"
                    : ""
                }
              >
                Add Job
              </NavLink>
              <NavLink
                to="/myposted"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-500 border-b-2  border-green-500 duration-100 ease-linear"
                    : ""
                }
              >
                My Posted
              </NavLink>
              <NavLink
                to="/mybids"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-500 border-b-2  border-green-500 duration-100 ease-linear"
                    : ""
                }
              >
                My bids
              </NavLink>
              <NavLink
                to="/bidrequest"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-500 border-b-2  border-green-500 duration-100 ease-linear"
                    : ""
                }
              >
                Bid Request
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    // ==============================
    // <React.Fragment>
    //   <Button onClick={openDrawer}>Open Drawer</Button>
    //   <Drawer open={open} onClose={closeDrawer} className="p-4">
    //     <div className="mb-6 flex items-center justify-between">
    //       <Typography variant="h5" color="blue-gray">
    //         Material Tailwind
    //       </Typography>
    //       <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={2}
    //           stroke="currentColor"
    //           className="h-5 w-5"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </IconButton>
    //     </div>
    //     <Typography color="gray" className="mb-8 pr-4 font-normal">
    //       Material Tailwind features multiple React and HTML components, all
    //       written with Tailwind CSS classes and Material Design guidelines.
    //     </Typography>
    //     <div className="flex gap-2">
    //       <Button size="sm" variant="outlined">
    //         Documentation
    //       </Button>
    //       <Button size="sm">Get Started</Button>
    //     </div>
    //   </Drawer>
    // </React.Fragment>
  );
};

export default MobileManu;
