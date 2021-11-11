import React from "react";
import { useSelector } from "react-redux";

import BasePage from "@ui/BasePage";
import Container from "./Content";

import { RootState } from "@/store";

interface Props {
  error: string | boolean;
}

const Repositories = ({ error }: Props) => {
  const { repositories } = useSelector((state: RootState) => state);

  return (
    <BasePage>
      {!error ? (
        <>
          {repositories.map((repository) => (
            <Container key={repository.url} repositoryInfo={repository} />
          ))}
          {repositories.length === 0 && (
            <p style={{ color: "#fff" }}>
              Something went wrong with API... check console for more info{" "}
            </p>
          )}
        </>
      ) : (
        <p style={{ color: "#fff" }}>{error}</p>
      )}
    </BasePage>
  );
};

export default Repositories;
