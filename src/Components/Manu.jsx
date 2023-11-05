import { NavLink } from "react-router-dom";

const Manu = () => {
  return (
    <div className=" font-semibold text-lg  hidden lg:flex gap-8 items-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-green-500 border-b-2 pb-1  border-green-500 duration-100 ease-linear"
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
  );
};

export default Manu;
