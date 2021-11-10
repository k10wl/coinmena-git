import styled from "styled-components";

const ListButton = styled.button`
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

  @media screen and (max-width: 728px) {
    span {
      display: none;
    }
  }
`;

export default ListButton;
