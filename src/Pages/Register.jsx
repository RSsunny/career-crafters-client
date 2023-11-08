import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
const Register = () => {
  const [eye, setEye] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, seterror] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const phone = from.phone.value;
    const email = from.email.value;
    const password = from.password.value;
    const user = { name, email, phone, password };
    console.log(user);
    const toastLoding = toast.loading("Loding...");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("login success");
        toast.success("Success", { id: toastLoding });
        navigate("/");
      })
      .catch((err) => {
        seterror("password not match");
        toast.error(err.message, { id: toastLoding });
        console.log(err);
      });
  };
  return (
    <>
      <div className="md:h-screen  bg-gray-200 md:p-10 text-black">
        <div className="flex flex-col-reverse  md:flex-row  max-w-7xl mx-auto  w-full h-full  items-center  relative overflow-hidden bg-cover bg-center object-cover">
          <div className="flex-1 h-full w-full md:w-1/2  ">
            <img
              className="h-full w-full md:rounded-l-xl object-center "
              src="https://i.ibb.co/rHpzXWb/vintage-4494596-1280.jpg"
              alt=""
            />
          </div>
          <div className=" bg-white flex-1 h-full  rounded-r-xl relative flex flex-col justify-between w-full md:w-1/2">
            <div className="flex justify-between items-center lg:px-5">
              <Link to={"/"}>
                <h1 className="text-lg lg:text-3xl m-2  font-bold font-playfair">
                  Career <span className="text-green-500">Crafters</span>
                </h1>
              </Link>
              <p className="text-xs mr-5 hidden md:block">
                Don't have an account ?{" "}
                <Link to={"/login"} className="text-green-500">
                  Signin
                </Link>
              </p>
            </div>
            <form onSubmit={handleRegister} className="px-5">
              <h1 className="text-3xl font-playfair font-bold text-center mt-10">
                Register
              </h1>
              <p className="text-center my-5">
                {" "}
                Explore job opportunities that match your skills and interests.
              </p>
              <h1>Name </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="text"
                name="name"
                required
              />
              <h1>Email </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="email"
                name="email"
                required
              />
              <h1>Phone </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="number"
                name="phone"
              />

              <h1>Password </h1>
              <div className="relative">
                <input
                  className="w-full p-2 border border-black outline-none my-3 bg-white"
                  type={eye ? "text" : "password"}
                  name="password"
                />
                <div
                  onClick={() => setEye(!eye)}
                  className="absolute right-5 top-5 text-3xl cursor-pointer"
                >
                  {eye ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
              </div>
              <h1>Confrim Password </h1>
              <input
                className="w-full p-2 border border-black outline-none my-3 bg-white"
                type="password"
                name="confrimpassword"
                required
              />
              <div className="flex justify-between items-center">
                <p className="text-xs">
                  your have an account ?{" "}
                  <Link to={"/login"} className="text-green-500">
                    login
                  </Link>
                </p>
              </div>
              <input
                className="w-full p-2 mb-5   my-3 hover:border-none bg-green-500 hover:text-white duration-200 ease-linear text-3xl font-bold font-edu cursor-pointer"
                type="submit"
                value="Register"
              />
              {error && <h1 className="text-xs text-red-500">{error}</h1>}
              {success && <h1 className="text-xs text-green-500">{success}</h1>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
