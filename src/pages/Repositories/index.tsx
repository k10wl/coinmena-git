import React from "react";

import BasePage from "@ui/BasePage";
import Container from "./Content";

const dummyInfo = {
  rank: 1,
  username: "bryandlee",
  repositoryName: "animegan2-pytorch",
  url: "https://github.com/bryandlee/animegan2-pytorch",
  description: "PyTorch implementation of AnimeGANv2",
  language: "Jupyter Notebook",
  languageColor: "#DA5B0B",
  totalStars: 855,
  forks: 79,
  starsSince: 151,
  since: "daily",
  builtBy: [
    {
      username: "bryandlee",
      url: "https://github.com/bryandlee",
      avatar: "https://avatars.githubusercontent.com/u/26464535?s=40&v=4",
    },
    {
      username: "xhlulu",
      url: "https://github.com/xhlulu",
      avatar: "https://avatars.githubusercontent.com/u/21180505?s=40&v=4",
    },
    {
      username: "AK391",
      url: "https://github.com/AK391",
      avatar: "https://avatars.githubusercontent.com/u/81195143?s=40&v=4",
    },
    {
      username: "Sxela",
      url: "https://github.com/Sxela",
      avatar: "https://avatars.githubusercontent.com/u/11751592?s=40&v=4",
    },
  ],
};

const Repositories = () => (
  <BasePage>
    <Container repositoryInfo={dummyInfo} />
  </BasePage>
);

export default Repositories;
