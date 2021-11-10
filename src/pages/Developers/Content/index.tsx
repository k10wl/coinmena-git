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

interface Props {
  developer: DevelopersInterface;
}

const Content = ({ developer }: Props) => (
  <Container container id={developer.username}>
    <Mui.Grid item xs={4}>
      <Mui.Grid container>
        <Ranking href={developer.url}>{developer.rank}</Ranking>
        <ProfilePicture>
          <a href={developer.url}>
            <img src={developer.avatar} alt={developer.name} />
          </a>
        </ProfilePicture>
        <Mui.Grid item>
          <Mui.Grid container direction="column">
            <ProfileName type="name" href={developer.url}>
              {developer.name}
            </ProfileName>
            <ProfileName type="username" href={developer.url}>
              {developer.username}
            </ProfileName>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Grid>
    <Mui.Grid item xs={8}>
      <Mui.Grid container>
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
            <a href={developer.popularRepository.url}>
              <Icon spacing={5} src={Repository} alt="" />{" "}
              {developer.popularRepository.repositoryName}
            </a>
          </Mui.Grid>
          <RepoDescription
            marginY="5px"
            fontSize="12px"
            fontWeight={400}
            fontFamily="Segoe UI"
          >
            {developer.popularRepository.description}
          </RepoDescription>
        </Mui.Grid>
        <Mui.Grid item xs={6} sm={3}>
          <Mui.Grid container justifyContent="flex-end">
            <ListButton>Follow</ListButton>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Grid>
  </Container>
);

export default Content;
