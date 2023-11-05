import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-gray-300">
      <div
        className="h-screen flex justify-end items-center relative overflow-hidden bg-cover bg-center object-cover"
        style={{
          backgroundImage: `url("https://i.ibb.co/3SZ8fRx/user-login-form-on-mobile-phone-screen-banner-vector-30728532.jpg")`,
        }}
      >
        <div className="w-[500px] lg:w-[800px] bg-white lg:mr-36 ">
          <form className="p-5">
            <h1 className="text-3xl font-playfair font-bold text-center my-5">
              Login
            </h1>
            <h1>Email </h1>
            <input
              className="w-full p-5 border my-3"
              type="email"
              name="enail"
            />
            <h1>Password </h1>
            <input
              className="w-full p-5 border my-3"
              type="password"
              name="password"
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-red-500">forget password ?</p>
              <p className="text-xs">
                Your are new loking ?{" "}
                <Link to={"/register"} className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
            <input
              className="w-full p-5 border my-3 hover:bg-green-500 hover:text-white duration-200 ease-linear text-3xl font-bold font-edu"
              type="submit"
              value="Login"
            />

            <div className="flex justify-center items-center gap-5 my-5 text-4xl">
              <FcGoogle></FcGoogle>
              <BsFacebook></BsFacebook>
              <BsGithub></BsGithub>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
// https://i.ibb.co/3SZ8fRx/user-login-form-on-mobile-phone-screen-banner-vector-30728532.jpg
