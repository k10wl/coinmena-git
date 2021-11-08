import React from "react";
import { Link } from "react-router-dom";

import * as Mui from "@mui/material";

import NavigationButton from "./NavigationButton";

interface Props {
  currentPage: "Repositories" | "Developers";
}

const ListHeader = ({ currentPage }: Props) => (
  <Mui.Grid>
    <NavigationButton selected={currentPage === "Repositories"}>
      <Link to="/">Repositories</Link>
    </NavigationButton>
    <NavigationButton selected={currentPage === "Developers"}>
      <Link to="/developers">Developers</Link>
    </NavigationButton>
  </Mui.Grid>
);

export default ListHeader;
