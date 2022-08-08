import styled from "styled-components";

export const StyledButton = styled.i`
  border-radius: 50px;
  background: #2e8fe5;
  white-space: nowrap;
  padding: ${(props) => props.size && props.size};
  color: white;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 0.8rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &&:hover {
    background: white;
    color: #2e8fe5;
    transition: all 0.2s ease-in-out 0s;
  }

  &:focus {
    background: white;
    color: #2e8fe5;
    transition: all 0.2s ease-in-out 0s;
  }

  @media (min-width: 767px) {
    padding: 18px 30px;
  }
`;
