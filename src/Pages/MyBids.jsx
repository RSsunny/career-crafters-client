import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyBids = () => {
  const axios = useAxios();

  const { user } = useAuth();

  console.log(user?.email);
  const [statusname, setsStatusname] = useState("");
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["bidsjob", user],
    queryFn: () =>
      axios.get(`/api/v1/bids?youremail=${user.email}`).then((res) => res.data),
  });
  const handleComplet = (select) => {
    setsStatusname("");
    setsStatusname(select);
    const { id, complate } = statusname;
    const hgfghfg = { complate };
    axios
      .patch(`/api/v1/bids/${id}`, hgfghfg)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5 lg:px-0">
      <h1 className="text-3xl text-center font-playfair font-bold my-10">
        My Bids
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, indx) => (
              <tr key={data._id}>
                <th>{indx + 1}</th>
                <td>{data?.jobtitle}</td>
                <td>{data?.youremail}</td>
                <td>{data?.dateandtime}</td>
                <td>
                  {" "}
                  {data.status
                    ? data.status === "Accept"
                      ? data.complate
                        ? "complate"
                        : "in progress"
                      : "canceled"
                    : "pending"}
                </td>
                <td>
                  {data?.status ? (
                    data?.complate ? (
                      ""
                    ) : (
                      <button
                        onClick={() =>
                          handleComplet({ id: data?._id, complate: true })
                        }
                        className={`px-4 py-1  border rounded-3xl ${
                          !data.status && "opacity-50 cursor-not-allowed"
                        }  `}
                      >
                        Complete
                      </button>
                    )
                  ) : (
                    <button
                      className={`px-4 py-1  border rounded-3xl ${
                        !data.status && "opacity-50 cursor-not-allowed"
                      }  `}
                    >
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
