import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import Fork from "@images/Fork.svg";
import Star from "@images/Star.svg";
import Repository from "@images/Repository.svg";

const Container = styled(Mui.Grid)`
  padding: 15px;
`;

interface IconProps {
  spacing?: number
}

const Icon = styled.img<IconProps>`
  width: 16px;
  height: 16px;
  margin-right: ${(props) => props.spacing || 0}px;
`;

const RepoNameContainer = styled(Mui.Grid)`
  cursor: pointer;
  a {
    color: #58a6ff;
    font-family: Segoe UI;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }
  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #21262d;
  border: 1px solid #373b42;
  color: #c9d1d9;
  padding: 3px 12px;
  border-radius: 5px;
  img {
    margin-right: 4px;
  }
  &:hover {
    background-color: #30363d;
    border-color: #8b949e;
  }
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
          <RepoNameContainer container alignItems="flex-end">
            <Icon spacing={4} src={Repository} alt="repository" />
            <a href={url}>
              {username} / {repositoryName}
            </a>
          </RepoNameContainer>
        </Mui.Grid>
        <Button>
          <Icon spacing={2} src={Star} alt="star" /> Star
        </Button>
      </Mui.Grid>
      <RepoDetailsText marginY="4px" fontSize="12px" fontFamily="Segoe UI">
        {description}
      </RepoDetailsText>
      <Mui.Grid container marginTop="12px">
        <RepoDetail>
          <RepoDetailsText fontSize="12px" fontFamily="Segoe UI">
            {language}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Star} alt="star" />
          <RepoDetailsText fontSize="12px" fontFamily="Segoe UI">
            {totalStars}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Fork} alt="fork" />
          <RepoDetailsText fontSize="12px" fontFamily="Segoe UI">
            {forks}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Mui.Grid item>
            <Mui.Grid container>
              <RepoDetailsText fontSize="12px" fontFamily="Segoe UI">
                Build by
              </RepoDetailsText>
              {builtBy.map((user) => (
                <BuildBy key={user.url} src={user.avatar} alt={user.username} />
              ))}
            </Mui.Grid>
          </Mui.Grid>
        </RepoDetail>
        <Mui.Grid item marginLeft="auto">
          <Mui.Grid container>
            <Icon spacing={2} src={Star} alt="star" />
            <RepoDetailsText fontSize="12px" fontFamily="Segoe UI">
              {starsSince} stars today
            </RepoDetailsText>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  );
};

export default Content;
