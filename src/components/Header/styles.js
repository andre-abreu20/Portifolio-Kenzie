import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  top: 0px;
  background-color: #001b33de;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 17px 2px #484848;
  h1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Nunito";
    cursor: pointer;
    font-size: 1.6rem;
    padding-bottom: 5px;
  }
  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    a {
      text-decoration: none;
    }
  }
  .primaryButton {
    background: transparent;
    color: white;
    font-weight: bold;
    border: none;
    font-size: 1rem;
    transition: ease 0.2s;
    &:hover {
      color: #c5c5c5;
      border-bottom: 10px solid #2e8fe5;
      border-radius: 8px;
    }
  }
  @media (min-width: 767px) {
    .primaryButton {
      padding: 12px 22px;
    }
    h1 {
      width: 25%;
    }
    flex-direction: initial;
  }
`;
