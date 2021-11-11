import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

import BasePage from "@/components/ui/BasePage";
import Content from "./Content";

import DeveloperInterface from "@/components/interface/developer";
import { RootState } from "@/store";
import { storeDevData } from "@/store/developers";

const Developers = () => {
  const { developers } = useSelector((state: RootState) => state);
  const [developersApi, setDevelopersApi] = useState<DeveloperInterface[]>(developers);

  const dispatch = useDispatch();

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://gh-trending-api.herokuapp.com/developers";

  useEffect(() => {
    setDevelopersApi(developers);
  }, [developers]);

  useQuery("devData", async () => {
    if (developersApi.length === 0) {
      try {
        const data = await fetch(proxyUrl + targetUrl);
        const response = await data.json();
        dispatch(storeDevData(response));
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <BasePage>
      <>
        {developersApi.map((developer) => (
          <Content key={developer.username} developer={developer} />
        ))}
      </>
    </BasePage>
  );
};

export default Developers;
