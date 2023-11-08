import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
const Mycaed = ({ card, refetch }) => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    _id,
    email,
    jobtitle,
    miniprice,
    maxprice,
    description,
    dateandtime,
    categoris,
  } = card || {};

  const handledelet = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/v1/jobs/${_id}`).then((res) => {
          console.log(res.data);
          refetch();
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your job has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="border-2 shadow-md  border-green-500   mx-auto">
      <div className="flex justify-center items-center h-44 border-b border-black bg-gray-200 ">
        {" "}
        <h1 className="text-2xl font-playfair font-bold ">{jobtitle}</h1>
      </div>
      <div className="flex justify-between items-center p-2">
        {" "}
        <p>{dateandtime}</p>
        <h1>
          salary : ${miniprice}-${maxprice}
        </h1>
      </div>
      <p className="my-3 text-xs px-2">{description}</p>
      <div className="flex justify-between  gap-5  m-4">
        <Link
          to={`/updatejob/${_id}`}
          className="border rounded-full px-4 py-1 flex-1"
        >
          Update
        </Link>
        <button
          onClick={handledelet}
          className="border rounded-full px-4 py-1 flex-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Mycaed;

Mycaed.propTypes = {
  card: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
