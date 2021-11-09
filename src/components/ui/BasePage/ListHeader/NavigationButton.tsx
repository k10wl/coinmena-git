import { Link } from "react-router-dom";

import styled from "styled-components";

interface Props {
  selected: boolean;
}

const NavigationButtons = styled(Link)<Props>`
  background-color: ${(props) => (props.selected ? "#1f6feb" : "#161b22")};
  outline: none;
  border: ${(props) =>
    props.selected ? "1px solid #1f6feb" : "1px solid #30363d;"};

  color: ${(props) => (props.selected ? "#f0f6fc" : "#b4bcc3")};
  text-decoration: none;
  font-family: Segoe UI;
  font-style: 14px;
  font-weight: 500px;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
    border-left: none;
  }
`;

export default NavigationButtons;
