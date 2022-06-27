import styled from "styled-components";
import woodBackground from "../../assets/images/woodBackground.jpg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const TopicsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 900px;
  justify-content: space-between;
  transition: all 1 ease-in-out;
  h3 {
    font-size: 1.6rem;
    color: #0085ff;
    font-weight: bold;
  }
  .qualificationsTitle {
    margin-bottom: 35px;
  }
`;

export const AboutMeCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  padding: 15px;
  margin-top: 100px;
  margin-bottom: 300px;
  border: solid 2px rgba(255 255 255 / 24%);
  box-shadow: 2px -1px 20px 6px #616161;
  border-radius: 8px;
  background-image: url(${woodBackground});
  transition: 0.5s ease-in-out;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 85%;
    height: 355px;
    color: white;
    font-family: "Nunito";
    p {
      font-family: "Nunito";
      font-size: 1.2rem;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    h3 {
      font-size: 1.6rem;
      color: #0085ff;
      font-weight: bold;
    }
    h4 {
      font-size: 1.4rem;
      color: white;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.6rem;
      color: #0085ff;
      font-weight: bold;
    }
  }
  img {
    width: 85%;
    max-width: 264px;
    height: 230px;
    border-radius: 50%;
    margin-top: 30px;
  }
  @media (min-width: 767px) {
    flex-direction: row;
    padding: 30px;
    width: 74vw;
    max-width: 900px;
    img {
      max-width: 300px;
      height: 100%;
      max-height: 300px;
      margin-left: 20px;
    }
  }
`;

export const QualificationCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  background-image: url(${woodBackground});
  margin-bottom: 300px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  div {
    display: flex;
  }
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }

  img {
    height: auto;
    width: 70vw;
    min-width: 300px;
    max-width: 830px;
  }
  @media (min-width: 767px) {
    svg {
      font-size: 1rem;
    }
    .backwardBtn {
      margin-left: -50px;
    }
  }
`;

export const ProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  max-width: 900px;
  height: auto;
  background-image: url(${woodBackground});
  margin-bottom: 300px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;

  .cardsProjects {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: white;
      font-weight: bold;
    }
    .references {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .tecGroupBtns {
        display: flex;
        justify-content: space-evenly;
        width: 280px;
      }
      margin-top: 20px;
      .tecBtns {
        width: 75px;
        height: 25px;
        font-family: "Nunito";
        font-weight: bold;
        border-radius: 8px;
        border: none;
        cursor: default;
      }
      .links {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }
  }
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
  }

  img {
    width: 280px;
    height: 200px;
  }
  @media (min-width: 767px) {
    svg {
      font-size: 1rem;
    }
    div {
      display: flex;
    }
    .backwardBtn {
      margin-left: -50px;
    }
    .cardsProjects {
      img {
        width: 45vw;
        height: 400px;
      }
    }
  }
  @media (min-width: 1023px) {
  }
`;
