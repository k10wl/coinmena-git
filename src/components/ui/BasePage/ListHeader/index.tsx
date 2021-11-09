import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import NavigationButton from "./NavigationButton";

import { AvailablePages } from "@hooks/useCurrentPage";

const Header = styled(Mui.Grid)`
  min-height: 50px;
  padding: 10px 0;
  border-bottom: none;
  background-color: #161b22;
`;

interface Props {
  page: AvailablePages["page"];
}

const ListHeader = ({ page }: Props) => (
  <Header container justifyContent="center" alignItems="center">
    <NavigationButton to="/" selected={page === "Repositories"}>
      Repositories
    </NavigationButton>
    <NavigationButton to="/developers" selected={page === "Developers"}>
      Developers
    </NavigationButton>
  </Header>
);

export default ListHeader;
