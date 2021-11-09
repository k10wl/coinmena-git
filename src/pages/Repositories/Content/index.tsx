import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import Fork from "@images/Fork.svg";
import Star from "@images/Star.svg";
import Repository from "@images/Repository.svg";

const Container = styled(Mui.Grid)`
  padding: 15px;
`;

const RepoName = styled(Mui.Typography)`
  color: #58a6ff;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #21262d;
  border: 1px solid #373b42;
  color: #c9d1d9;
  padding: 3px 12px;
  border-radius: 5px;
`;

const BuildBy = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 0 1px;
`;

const RepoDetail = styled(Mui.Grid)`
  display: flex;
  padding-right: 16px;
`;

const RepoDetailsText = styled(Mui.Typography)`
  color: #8b949e;
`;

interface Props {
  repositoryInfo: {
    rank: number;
    username: string;
    repositoryName: string;
    url: string;
    description: string;
    language: string;
    languageColor: string;
    totalStars: number;
    forks: number;
    starsSince: number;
    since: string;
    builtBy: {
      username: string;
      url: string;
      avatar: string;
    }[];
  };
}

const Content = ({ repositoryInfo }: Props) => {
  const {
    username,
    repositoryName,
    url,
    description,
    language,
    languageColor,
    totalStars,
    forks,
    starsSince,
    since,
    builtBy,
  } = repositoryInfo;

  return (
    <Container container flexDirection="column">
      <Mui.Grid container justifyContent="space-between">
        <Mui.Grid item>
          <Mui.Grid container>
            <img src={Repository} alt="repository" />
            <RepoName
              fontFamily="Segoe UI"
              fontSize={20}
              fontWeight={600}
              onClick={() => (window.location.href = url)}
            >
              {username} / {repositoryName}
            </RepoName>
          </Mui.Grid>
        </Mui.Grid>
        <Button>
          <img src={Star} alt="star" /> Star
        </Button>
      </Mui.Grid>
      <RepoDetailsText>{description}</RepoDetailsText>
      <Mui.Grid container>
        <RepoDetail>
          <RepoDetailsText>{language}</RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <img src={Star} alt="star" />
          <RepoDetailsText>{totalStars}</RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <img src={Fork} alt="fork" />
          <RepoDetailsText>{forks}</RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Mui.Grid item>
            <Mui.Grid container>
              <RepoDetailsText>Build by</RepoDetailsText>
              {builtBy.map((user) => (
                <BuildBy key={user.url} src={user.avatar} alt={user.username} />
              ))}
            </Mui.Grid>
          </Mui.Grid>
        </RepoDetail>
        <Mui.Grid item marginLeft="auto">
          <Mui.Grid container>
            <img src={Star} alt="star" />
            <RepoDetailsText>
              {starsSince} stars {since}
            </RepoDetailsText>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  );
};

export default Content;
