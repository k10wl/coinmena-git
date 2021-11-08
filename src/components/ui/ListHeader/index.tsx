import React from "react";
import { Link } from "react-router-dom";

import * as Mui from "@mui/material";

interface Props {
  currentPage: "Repositories" | "Developers";
}

const ListHeader = ({ currentPage }: Props) => (
  <Mui.Grid>
    <Mui.Button component={Link} to="/">
      Repositories {currentPage === "Repositories" && "←"}
    </Mui.Button>
    <Mui.Button component={Link} to="/developers">
      {currentPage === "Developers" && "→"} Developers
    </Mui.Button>
  </Mui.Grid>
);

export default ListHeader;
