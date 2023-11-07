import { useQuery } from "@tanstack/react-query";

import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Mycaed from "../Components/mycaed";

const MyPosted = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["requests", user],
    queryFn: () =>
      axios(`/api/v1/jobs?email=${user.email}`).then((res) => res.data),
  });

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-center text-3xl font-playfair font-bold">
        My Posted
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  justify-around gap-10 mt-20  px-4 md:px-5 lg:px-0  lg:mx-0  ">
        {data?.map((card) => (
          <Mycaed key={card._id} card={card} refetch={refetch}></Mycaed>
        ))}
      </div>
    </div>
  );
};

export default MyPosted;
