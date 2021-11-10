import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import Fork from "@images/Fork.svg";
import Star from "@images/Star.svg";
import Repository from "@images/Repository.svg";

import RepositoryInterface from "@/components/interface/repository";

const Container = styled(Mui.Grid)`
  padding: 15px;
`;

interface IconProps {
  spacing?: number;
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
  &:active {
    background-color: #282e33;
    border-color: #6e7681;
  }
`;

const AuthorAvatar = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 0 1px;
  cursor: pointer;
`;

const RepoDetail = styled(Mui.Grid)`
  display: flex;
  padding-right: 16px;
`;

const RepoDetailsText = styled(Mui.Typography)`
  color: #8b949e;
`;

const Content = ({ repositoryInfo }: RepositoryInterface) => {
  const {
    username,
    repositoryName,
    url,
    description,
    language,
    totalStars,
    forks,
    starsSince,
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
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {language}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Star} alt="star" />
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {totalStars}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Fork} alt="fork" />
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {forks}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Mui.Grid item>
            <Mui.Grid container>
              <RepoDetailsText
                lineHeight={1.3}
                fontSize="12px"
                fontFamily="Segoe UI"
              >
                Build by
              </RepoDetailsText>
              {builtBy.map((user) => (
                <AuthorAvatar
                  key={user.url}
                  src={user.avatar}
                  alt={user.username}
                />
              ))}
            </Mui.Grid>
          </Mui.Grid>
        </RepoDetail>
        <Mui.Grid item marginLeft="auto">
          <Mui.Grid container>
            <Icon spacing={2} src={Star} alt="star" />
            <RepoDetailsText
              lineHeight={1.3}
              fontSize="12px"
              fontFamily="Segoe UI"
            >
              {starsSince} stars today
            </RepoDetailsText>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  );
};

export default Content;
