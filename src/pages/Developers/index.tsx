import React, { useEffect, useState } from "react";

import BasePage from "@/components/ui/BasePage";
import Content from "./Content";

import DeveloperInterface from "@/components/interface/developer";

const Developers = () => {
  const [developers, setDevelopers] = useState<DeveloperInterface[]>([]);
  useEffect(() => {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://gh-trending-api.herokuapp.com/developers";
    fetch(proxyUrl + targetUrl)
      .then((blob) => blob.json())
      .then((data) => {
        console.log('data:', data)
        setDevelopers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <BasePage>
      <>
        {developers.map((developer) => (
          <Content key={developer.username} developer={developer} />
        ))}
      </>
    </BasePage>
  );
};

export default Developers;
