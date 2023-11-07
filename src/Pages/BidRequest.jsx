import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
const BidRequest = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [statusname, setsStatusname] = useState("");

  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["requests", user],
    queryFn: () =>
      axios(`/api/v1/bids?owneremail=${user.email}`).then((res) => res.data),
  });

  const handleselect = (select) => {
    setsStatusname("");
    setsStatusname(select);
    const { id, status } = statusname;
    const hgfghfg = { status };
    console.log(id, hgfghfg);
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
        Bid Request
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>Email</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Accept </th>
              <th>Reject </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, indx) => (
              <tr key={data._id}>
                <th>{indx + 1}</th>
                <td>{data?.jobtitle}</td>
                <td>{data?.youremail}</td>
                <td>${data?.price}</td>
                <td>{data?.dateandtime}</td>
                <td> {data.status ? data.status : "pending"}</td>
                <td>
                  {data.status ? (
                    <ProgressBar
                      percent={data?.complate ? 100 : 80}
                      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                    >
                      <Step transition="scale">
                        {({ accomplished }) => (
                          <img
                            style={{
                              filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                          />
                        )}
                      </Step>
                      <Step transition="scale">
                        {({ accomplished }) => (
                          <img
                            style={{
                              filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                          />
                        )}
                      </Step>
                      <Step transition="scale">
                        {({ accomplished }) => (
                          <img
                            style={{
                              filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                          />
                        )}
                      </Step>
                    </ProgressBar>
                  ) : (
                    <button
                      onClick={() =>
                        handleselect({ id: data._id, status: "Accept" })
                      }
                      className="px-4 py-1  border rounded-3xl  "
                    >
                      Accept
                    </button>
                  )}
                </td>

                <td>
                  {!data.status && (
                    <button
                      onClick={() =>
                        handleselect({ id: data._id, status: "Reject" })
                      }
                      className="px-4 py-1  border rounded-3xl  "
                    >
                      Reject
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

export default BidRequest;
