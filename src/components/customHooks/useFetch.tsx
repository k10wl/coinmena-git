import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { storeRepoData } from "@/store/repositories";
import { storeDevData } from "@/store/developers";

const useFetch = () => {
  const dispatch = useDispatch();

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://gh-trending-api.herokuapp.com/";

  const { isLoading: repoIsLoading, error: repoError } = useQuery(
    "repoData",
    async () => {
      try {
        const data = await fetch(`${proxyUrl + targetUrl}repositories`);
        const response = await data.json();
        dispatch(storeRepoData(response));
      } catch (error) {
        console.error(error);
      }
    }
  );

  const { isLoading: devIsLoading, error: devError } = useQuery(
    "devData",
    async () => {
      try {
        const data = await fetch(`${proxyUrl + targetUrl}developers`);
        const response = await data.json();
        dispatch(storeDevData(response));
      } catch (error) {
        console.error(error);
      }
    }
  );

  const isLoading = devIsLoading === true || repoIsLoading === true;
  const error =
    !devError && !repoError ? false : devError ? "devError" : "repoError";

  return {
    isLoading,
    error,
  };
};

export default useFetch;
