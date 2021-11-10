import React from "react";

import BasePage from "@/components/ui/BasePage";
import Content from "./Content";

const dummyData = {
  rank: 1,
  username: "mvdan",
  name: "Daniel Martí",
  url: "https://github.com/mvdan",
  avatar: "https://avatars.githubusercontent.com/u/3576549?s=96&v=4",
  since: "daily",
  popularRepository: {
    repositoryName: "sh",
    description: "description description description description description description description description description description description description ",
    url: "https://github.com/mvdan/sh",
  },
};

const Developers = () => (
  <BasePage>
    <Content developer={dummyData} />
  </BasePage>
);

export default Developers;
