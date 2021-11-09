import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const List = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ListContainer = ({ children }: Props) => {
  return (
    <Mui.Grid container justifyContent="center">
      <List>{children}</List>
    </Mui.Grid>
  );
};

export default ListContainer;
