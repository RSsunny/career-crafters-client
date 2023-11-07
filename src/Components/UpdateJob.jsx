import useAuth from "../Hooks/useAuth";

import useAxios from "../Hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const navigate = useNavigate();

  const id = useParams();
  console.log(id);

  const { data, refetch } = useQuery({
    queryKey: ["rtsdf"],
    queryFn: () => axios(`/api/v1/jobs/${id.id}`).then((res) => res.data),
  });
  console.log(data);

  const handleJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobtitle = form.jobtitle.value;
    const miniprice = form.miniprice.value;
    const maxprice = form.maxprice.value;
    const description = form.description.value;
    const dateandtime = form.dateandtime.value;
    const categoris = form.categoris.value;

    const jobinfo =
      {
        email,
        jobtitle,
        miniprice,
        maxprice,
        description,
        dateandtime,
        categoris,
      } || {};
    axios
      .patch(`/api/v1/jobs/${data._id}`, jobinfo)
      .then(() => {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Job has been Update",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myposted");
      })
      .catch(() => {
        // console.log(err);
      });
  };
  return (
    <div className="max-w-7xl mx-auto px-0 md:px-5 lg:px-0">
      <h1 className="text-4xl font-playfair font-bold text-center mt-20 capitalize ">
        Update job here...!
      </h1>
      <form
        onSubmit={handleJob}
        className="md:border border-black rounded-md  my-10 pt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-4 ">
          <div className="flex-1 w-full">
            <input
              className="w-full p-3 outline-none border border-black bg-transparent"
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="flex-1 w-full  ">
            <input
              className="w-full p-3 outline-none border border-black bg-transparent"
              type="text"
              name="categoris"
              defaultValue={data?.categoris}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-4">
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="text"
            name="jobtitle"
            defaultValue={data?.jobtitle}
            placeholder="Job title"
          />
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="datetime-local"
            name="dateandtime"
            defaultValue={data?.dateandtime}
            placeholder="Deadline"
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-between gap-10 px-5 py-4">
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="number"
            name="miniprice"
            placeholder="Minimum price
            "
            defaultValue={data?.miniprice}
          />
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="number"
            name="maxprice"
            placeholder="Maximum price"
            defaultValue={data?.maxprice}
          />
        </div>
        <div className="px-5 ">
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={data?.description}
            className="textarea textarea-border border-black textarea-sm w-full "
          ></textarea>
        </div>
        <div className="flex justify-center md:justify-end p-5 gap-5">
          <h1 className="border border-black btn px-4 py-1 rounded-md cursor-pointer">
            reset
          </h1>
          <input
            className="border border-black px-4 py-2 rounded-md cursor-pointer btn"
            type="submit"
            value="Add job"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
