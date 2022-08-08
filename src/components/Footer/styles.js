import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #2e8fe5bd;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DevInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  div {
    svg {
      width: 100px;
      font-size: 30px;
      color: white;
    }
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
    color: white;
    margin-top: 10px;
    min-width: 300px;
    max-width: 500px;
  }
`;
