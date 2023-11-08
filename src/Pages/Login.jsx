import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [eye, setEye] = useState(false);
  const { userlogin, midealogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState("");
  const [error, seterror] = useState("");
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    console.log(user);
    setSuccess("");
    seterror("");
    const toastloding = toast.loading("Loding...");
    userlogin(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("login success");
        toast.success("success", { id: toastloding });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message, { id: toastloding });
        console.log(err);
        seterror("password not match");
      });
  };

  const mideaLogin = async (midea) => {
    const toastloding = toast.loading("Loding...");
    midea()
      .then(() => {
        toast.success("success", { id: toastloding });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message, { id: toastloding });
        console.log(err);
      });
  };
  return (
    <div className="md:h-screen  bg-gray-200 md:p-10 text-black">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto  w-full h-full  items-center  relative overflow-hidden bg-cover bg-center object-cover">
        <div className="flex-1 h-full md:w-1/2  ">
          <img
            className="h-full w-full md:rounded-l-xl"
            src="https://i.ibb.co/C6w5Smf/career-3386334-1280.jpg"
            alt=""
          />
        </div>
        <div className=" bg-white flex-1 h-full  rounded-r-xl relative flex flex-col justify-between w-full md:w-1/2">
          <div className="flex justify-between items-center lg:px-5 mt-2">
            <Link to={"/"}>
              <h1 className="text-md md:text-lg lg:text-3xl ml-2 md:m-2  font-bold font-playfair">
                Career <span className="text-green-500">Crafters</span>
              </h1>
            </Link>
            <p className="text-xs mr-5">
              Don't have an account ?{" "}
              <Link to={"/register"} className="text-red-500">
                SignUp
              </Link>
            </p>
          </div>
          <form onSubmit={handleLogin} className="p-5 lg:px-32">
            <h1 className="text-3xl font-playfair font-bold text-center mt-10">
              Login
            </h1>
            <p className="text-center my-5">
              {" "}
              Explore job opportunities that match your skills and interests.
            </p>
            <h1>Email </h1>
            <input
              className="w-full p-3 border border-black outline-none my-3 bg-white"
              type="email"
              name="email"
            />
            <h1>Password </h1>
            <div className="relative">
              <input
                className="w-full p-3 border border-black outline-none my-3 bg-white"
                type={eye ? "text" : "password"}
                name="password"
              />
              <div
                onClick={() => setEye(!eye)}
                className="absolute right-5 top-6 text-3xl cursor-pointer"
              >
                {eye ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <input type="checkbox" name="" id="" />
                <p className="text-xs">Remember me</p>
              </div>
              <p className="text-xs text-red-500">forget password ?</p>
            </div>
            <input
              className="w-full p-2 border my-3 bg-green-500 hover:text-white duration-200 ease-linear text-3xl font-bold font-edu"
              type="submit"
              value="Login"
            />
            {error && <h1 className="text-xs text-red-500">{error}</h1>}
            {success && <h1 className="text-xs text-green-500">{success}</h1>}

            <div className="flex flex-col   lg:flex-row justify-center items-center gap-5 my-5 mt-10 lg:mt-20">
              <div
                onClick={() => mideaLogin(midealogin)}
                className="flex items-center gap-5 border px-8 py-2 text-xl font-bold rounded-md hover:bg-indigo-500 hover:text-white duration-500 cursor-pointer w-full text-center justify-center "
              >
                <FcGoogle className=" text-3xl"></FcGoogle>
                <h1>Google</h1>
              </div>
              <div className="flex items-center gap-5 border px-8 py-2 text-xl font-bold rounded-md hover:bg-green-600 hover:text-white duration-500 cursor-pointer w-full text-center justify-center">
                <BsFacebook className=" text-3xl"></BsFacebook>
                <h1>Facebook</h1>
              </div>
              <div className="flex items-center gap-5 border px-8 py-2 text-xl font-bold rounded-md hover:bg-black hover:text-white duration-500 cursor-pointer w-full text-center justify-center">
                <BsGithub className=" text-3xl"></BsGithub>
                <h1>Github</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
