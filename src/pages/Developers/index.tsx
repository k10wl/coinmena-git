import React from "react";
import { useSelector } from "react-redux";

import BasePage from "@/components/ui/BasePage";
import Content from "./Content";

import { RootState } from "@/store";

interface Props {
  error: string | boolean;
}

const Developers = ({ error }: Props) => {
  const { developers } = useSelector((state: RootState) => state);

  return (
    <BasePage>
      {!error ? (
        <>
          {developers.map((developer) => (
            <Content key={developer.username} developer={developer} />
          ))}
          {developers.length === 0 && (
            <p style={{ color: "#fff" }}>
              Something went wrong with API... check console for more info
            </p>
          )}
        </>
      ) : (
        <p style={{ color: "#fff" }}>{error}</p>
      )}
    </BasePage>
  );
};

export default Developers;
