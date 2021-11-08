import React from "react";
import { Link } from "react-router-dom";

import * as Mui from "@mui/material";

import NavigationButton from "./NavigationButton";

interface Props {
  currentPage: "Repositories" | "Developers";
}

const ListHeader = ({ currentPage }: Props) => (
  <Mui.Grid>
    <NavigationButton to="/" selected={currentPage === "Repositories"}>
      Repositories
    </NavigationButton>
    <NavigationButton to="/developers" selected={currentPage === "Developers"}>
      Developers
    </NavigationButton>
  </Mui.Grid>
);

export default ListHeader;
