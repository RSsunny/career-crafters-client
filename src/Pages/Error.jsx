import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        className="h-full w-full"
        src="https://i.ibb.co/WpLwX22/404-space.gif"
        alt=""
      />
      <div className="absolute inset-0    m-10 md:mx-20  text-white">
        <h1 className="md:text-2xl font-playfair font-bold ">
          {" "}
          <Link className="" to={"/"}>
            {" "}
            Home
          </Link>{" "}
          || Page Not Foubd
        </h1>
      </div>
    </div>
  );
};

export default Error;
