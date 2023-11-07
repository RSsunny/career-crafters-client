import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useJobs = () => {
  const axios = useAxios();
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => axios("/api/v1/jobs").then((res) => res.data),
  });
  return { isLoading, isError, data, error, refetch, isFetching };
};

export default useJobs;
