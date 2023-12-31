import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { user } = useAuth();
  const id = useParams();
  const axios = useAxios();
  const navigate = useNavigate();
  const { isPending, error, data } = useQuery({
    queryKey: ["singlejob"],
    queryFn: () => axios(`/api/v1/jobs/${id.id}`).then((res) => res.data),
  });
  const {
    _id,
    email,
    jobtitle,
    miniprice,
    maxprice,
    description,
    dateandtime,
    categoris,
  } = data || "";

  if (isPending) {
    return (
      <div className="text-center my-10">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handleBid = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const youremail = user?.email;
    const owneremail = email;

    const bidinfo = {
      price,
      youremail,
      owneremail,
      dateandtime,
      jobtitle,
    };
    if (youremail == owneremail) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Sory This is your post",
        showConfirmButton: true,
      });
    }
    axios
      .post("/api/v1/bids", bidinfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bid Complete",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mybids");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5 lg:px-0 mb-20 md:mb-64">
      <h1 className=" font-playfair font-bold mt-10 text-2xl">{categoris}</h1>
      <div>
        <h1 className="text-xl font-playfair font-bold my-3">{jobtitle}</h1>
        <h3>
          price Range : ${miniprice}-${maxprice}
        </h3>
        <h2>{description}</h2>
      </div>
      <h1 className="text-center font-playfair font-bold my-10 md:text-3xl">
        place your bid form
      </h1>
      <form
        onSubmit={handleBid}
        className="md:w-[800px] mx-auto border p-5 md:p-10"
      >
        <h1 className="text-xl font-playfair font-bold">Price :</h1>
        <input
          className="w-full p-3 mt-2 mb-5 outline-none border border-black"
          placeholder="your bidding amount"
          type="number"
          name="price"
          required
        />
        <h1 className="text-xl font-playfair font-bold">Deadline :</h1>
        <input
          className="w-full p-3 mt-2 mb-5 outline-none border border-black"
          type="text"
          name="dateandtime"
          defaultValue={dateandtime}
        />
        <h1 className="text-xl font-playfair font-bold">Your Email :</h1>
        <input
          className="w-full p-3 mt-2 mb-5 outline-none border border-black"
          type="email"
          name="dateandtime"
          defaultValue={user?.email}
          readOnly
        />
        <h1 className="text-xl font-playfair font-bold">Owner Email :</h1>
        <input
          className="w-full p-3 mt-2 mb-5 outline-none border border-black"
          type="owneremail"
          name="dateandtime"
          defaultValue={email}
          readOnly
        />
        <input
          className="w-full p-3 mt-2 mb-5 outline-none border border-black cursor-pointer font-playfair font-bold text-xl"
          type="submit"
          value="Bid on the project"
        />
      </form>
    </div>
  );
};

export default JobDetails;
