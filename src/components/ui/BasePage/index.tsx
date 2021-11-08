import React from "react";
import { useLocation } from "react-router";

import * as Mui from "@mui/material";
import styled from "styled-components";

import ListHeader from "@ui/ListHeader";

const Container = styled.div`
  background: #0d1117;
  width: 100vw;
  height: 100vh;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const Header = styled.div`
  padding: 50px 0;
  background-color: #161b22;
  border-bottom: 1px solid #30363d;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
`;

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
    <Container>
      <Mui.Grid container item xs={12} direction="column" alignItems="center">
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
            {relativeText}
          </Mui.Typography>
        </Header>
        <ListHeader currentPage={currentPage} />
        {children}
      </Mui.Grid>
    </Container>
  );
};

export default BasePage;
