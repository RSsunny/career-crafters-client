import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const { userlogin, midealogin, user } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    console.log(user);
    userlogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mideaLogin = (midea) => {
    midea()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-300">
      <div
        className="h-screen flex justify-end items-center relative overflow-hidden bg-cover bg-center object-cover"
        style={{
          backgroundImage: `url("https://i.ibb.co/3SZ8fRx/user-login-form-on-mobile-phone-screen-banner-vector-30728532.jpg")`,
        }}
      >
        <div className="w-[500px] lg:w-[800px] bg-white lg:mr-36 h-screen md:h-fit">
          <form onSubmit={handleLogin} className="p-5">
            <h1 className="text-3xl font-playfair font-bold text-center my-10">
              Login
            </h1>
            <h1>Email </h1>
            <input
              className="w-full p-5 border border-black outline-none my-3"
              type="email"
              name="email"
            />
            <h1>Password </h1>
            <input
              className="w-full p-5 border border-black outline-none my-3"
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
              <FcGoogle
                onClick={() => mideaLogin(midealogin)}
                className="cursor-pointer"
              ></FcGoogle>
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
