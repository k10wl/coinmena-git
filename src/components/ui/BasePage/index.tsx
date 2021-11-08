import React from "react";
import { useLocation } from "react-router";

import * as Mui from "@mui/material";
import ListHeader from "@ui/ListHeader";

interface Props {
  children: JSX.Element;
}

const BasePage = ({ children }: Props) => {
  const { pathname } = useLocation();
  const currentPage =
    pathname.replace(/\//gi, "") === "" ? "Repositories" : "Developers";
  const repoText = "See what the GitHub community is most excited about today.";
  const devText = "These are the developers building the hot tools today.";
  const relativeText = currentPage === "Developers" ? repoText : devText;

  return (
    <Mui.Grid container item xs={12} direction="column" alignItems="center">
      <Mui.Typography>Trending</Mui.Typography>
      <Mui.Typography>{relativeText}</Mui.Typography>
      <ListHeader currentPage={currentPage} />
      {children}
    </Mui.Grid>
  );
};

export default BasePage;
