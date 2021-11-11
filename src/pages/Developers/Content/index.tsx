import React from "react";

import * as Mui from "@mui/material";
import styled from "styled-components";

import PopularRepo from "@images/PopularRepo.svg";
import Repository from "@images/Repository.svg";

import ListButton from "@/components/ui/ListButton";

import DevelopersInterface from "@/components/interface/developer";

const Container = styled(Mui.Grid)`
  padding: 15px;
  border-bottom: 1px solid #21262d;
`;

const Ranking = styled.a`
  font-family: Segoe UI;
  font-size: 12px;
  font-weight: 400px;
  color: #8b949e;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfilePicture = styled.div`
  margin: 0 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

interface ProfileNameProps {
  type: "name" | "username";
}

const ProfileName = styled.a<ProfileNameProps>`
  font-family: Segoe UI;
  font-size: ${({ type }) => (type === "name" ? "20" : "16")}px;
  font-weight: ${({ type }) => (type === "name" ? "600" : "400")};
  color: ${({ type }) => (type === "name" ? "#58a6ff" : "#646c75")};
  text-decoration: none;
  &:hover {
    color: #58a6ff;
    text-decoration: underline;
  }
`;

interface IconProps {
  spacing?: number;
}

const Icon = styled.img<IconProps>`
  width: 16px;
  height: 16px;
  margin-right: ${(props) => props.spacing ?? 0}px;
  margin-top: auto;
  margin-bottom: auto;
  vertical-align: text-bottom;
`;

const RepoDescription = styled(Mui.Typography)`
  font-family: Segoe UI;
  font-size: 12px;
  font-weight: 400;
  color: #8b949e;
`;

const RepoLink = styled.a`
  color: #5198eb;
  text-decoration: none;
  font-family: Segoe UI;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  developer: DevelopersInterface;
}

const Content = ({ developer }: Props) => {
  const { username, name, rank, url, popularRepository, avatar } = developer;

  return (
    <Container container id={username}>
      <Mui.Grid item xs={4}>
        <Mui.Grid container>
          <Ranking href={url}>{rank}</Ranking>
          <ProfilePicture>
            <a href={url}>
              <img src={avatar} alt={name} />
            </a>
          </ProfilePicture>
          <Mui.Grid item>
            <Mui.Grid container direction="column">
              <ProfileName type="name" href={url}>
                {name}
              </ProfileName>
              <ProfileName type="username" href={url}>
                {username}
              </ProfileName>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid item xs={8}>
        <Mui.Grid container>
          {popularRepository.repositoryName && (
            <Mui.Grid item sm={9}>
              <Mui.Grid container>
                <Icon spacing={5} src={PopularRepo} alt="" />
                <RepoDescription
                  marginY="5px"
                  fontSize="12px"
                  fontWeight={400}
                  fontFamily="Segoe UI"
                >
                  POPULAR REPO
                </RepoDescription>
              </Mui.Grid>
              <Mui.Grid>
                <RepoLink href={popularRepository.url}>
                  <Icon spacing={5} src={Repository} alt="" />{" "}
                  {popularRepository.repositoryName}
                </RepoLink>
              </Mui.Grid>
              <RepoDescription
                marginY="5px"
                fontSize="12px"
                fontWeight={400}
                fontFamily="Segoe UI"
              >
                {/* Instead of description API returns `null` */}
                {popularRepository.description}
              </RepoDescription>
            </Mui.Grid>
          )}
          <Mui.Grid item xs={12} sm={3}>
            <Mui.Grid container justifyContent="flex-end">
              <ListButton>Follow</ListButton>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  );
};

export default Content;
