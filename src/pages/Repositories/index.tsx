import React, { useState, useEffect } from "react";

import RepositoryInterface from "@/components/interface/repository";

import BasePage from "@ui/BasePage";
import Container from "./Content";

const Repositories = () => {
  const [trendingRepos, setTrendingRepos] = useState<RepositoryInterface[]>([]);
  useEffect(() => {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://gh-trending-api.herokuapp.com/repositories";
    fetch(proxyUrl + targetUrl)
      .then((blob) => blob.json())
      .then((data) => {
        setTrendingRepos(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <BasePage>
      <>
        {trendingRepos.map((repository) => (
          <Container key={repository.url} repositoryInfo={repository} />
        ))}
      </>
    </BasePage>
  );
};

export default Repositories;
