import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const phone = from.phone.value;
    const email = from.email.value;
    const password = from.password.value;
    const user = { name, email, phone, password };
    console.log(user);

    createUser(email, password)
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
          <form onSubmit={handleRegister} className="px-5">
            <h1 className="text-3xl font-playfair font-bold text-center my-10">
              Register
            </h1>
            <h1>Name </h1>
            <input
              className="w-full p-2 border border-black outline-none my-3"
              type="text"
              name="name"
              required
            />
            <h1>Email </h1>
            <input
              className="w-full p-2 border border-black outline-none my-3"
              type="email"
              name="email"
              required
            />
            <h1>Phone </h1>
            <input
              className="w-full p-2 border border-black outline-none my-3"
              type="number"
              name="phone"
            />

            <h1>Password </h1>
            <input
              className="w-full p-2 border border-black outline-none my-3"
              type="password"
              name="password"
              required
            />
            <h1>Confrim Password </h1>
            <input
              className="w-full p-2 border border-black outline-none my-3"
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
              className="w-full p-2 mb-5 border border-black my-3 hover:border-none hover:bg-green-500 hover:text-white duration-200 ease-linear text-3xl font-bold font-edu"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
