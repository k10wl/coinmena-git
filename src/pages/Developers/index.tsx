import React from "react";
import { useSelector } from "react-redux";

import BasePage from "@/components/ui/BasePage";
import Content from "./Content";

import { RootState } from "@/store";

const Developers = () => {
  const { developers } = useSelector((state: RootState) => state);

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
