import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0d1117;
  color: #c9d1d9;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    filter: blur(0px);
  }
`;

const Loading = () => {
  return (
    <Container>
      <h1>Please wait for loading to complete</h1>
    </Container>
  );
};

export default Loading;
