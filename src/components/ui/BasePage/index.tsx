import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import ListHeader from "@/components/ui/BasePage/ListHeader";
import ListContainer from "@/components/ui/BasePage/ListContainer";

import useCurrentPage from "@hooks/useCurrentPage";

const Container = styled(Mui.Grid)`
  background: #0d1117;
  @media only screen and (max-width: 599px) {
    background: #161b22;
  }
  width: 100vw;
  height: 100vh;
  overflow: auto;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const Header = styled.div`
  padding: 25px 0;
  background-color: #161b22;
  border-bottom: 1px solid #30363d;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
`;

const List = styled(Mui.Grid)`
  border-radius: 7px;
  border: 1px solid #30363d;
  @media only screen and (max-width: 599px) {
    border-radius: 0;
    border-right: 0;
    border-left: 0;
  }
`;

interface Props {
  children: JSX.Element;
}

const BasePage = ({ children }: Props) => {
  const { page, description } = useCurrentPage();

  return (
    <Container container item alignItems="center">
      <Header>
        <Mui.Typography
          fontSize={32}
          fontFamily="Segoe UI"
          fontWeight={600}
          color="#c9d1d9"
        >
          Trending
        </Mui.Typography>
        <Mui.Typography
          fontSize={16}
          fontFamily="Segoe UI"
          fontWeight={400}
          color="#8b949e"
        >
          {description}
        </Mui.Typography>
      </Header>

      <Mui.Grid container justifyContent="center" marginY={3}>
        <List item xs={12} sm={11} md={10} lg={8} xl={6}>
          <ListHeader page={page} />
          <ListContainer>{children}</ListContainer>
        </List>
      </Mui.Grid>
    </Container>
  );
};

export default BasePage;
