import styled from "styled-components";

interface Props {
  selected: boolean;
}

const NavigationButtons = styled.button<Props>`
  background-color: ${(props) => (props.selected ? "#1f6feb" : "#161b22")};
  outline: none;
  border: none;
  &,
  & > * {
    color: ${(props) => (props.selected ? "#f0f6fc" : "#b4bcc3")};
    text-decoration: none;
    padding: 10px;
  }
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default NavigationButtons;
