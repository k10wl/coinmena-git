import React from "react";
import { useSelector } from "react-redux";

import BasePage from "@ui/BasePage";
import Container from "./Content";

import { RootState } from "@/store";

const Repositories = () => {
  const { repositories } = useSelector((state: RootState) => state);

  return (
    <BasePage>
      <>
        {repositories.map((repository) => (
          <Container key={repository.url} repositoryInfo={repository} />
        ))}
      </>
    </BasePage>
  );
};

export default Repositories;
