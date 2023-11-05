import { NavLink } from "react-router-dom";

const MobileManu = () => {
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
          <div className="menu p-4 w-full min-h-full bg-base-200 text-center flex justify-center items-center ">
            {/* Sidebar content here */}

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
  );
};

export default MobileManu;
