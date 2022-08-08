import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Button from "../Button";
import {
  AboutMeCard,
  Container,
  ProjectsCard,
  QualificationCard,
  TopicsList,
} from "./styles";
import { RiPagesLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
//Images
import AndreImage from "../../assets/images/ME.jpeg";
import Certificado from "../../assets/images/Certificado.png";
import nuKenzie from "../../assets/images/NuKenzie.png";
import quackritics from "../../assets/images/quackritics.png";
import kenzieHub from "../../assets/images/kenzieHub.png";
import torreHanoi from "../../assets/images/TorreHanoi.png";
import kenzieBurguer from "../../assets/images/KenzieBurguer.png";

export default function Topics() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  return (
    <>
      <Container>
        <TopicsList id="1">
          <AboutMeCard>
            <div>
              <h3>Sobre mim</h3>
              <h4>André Luís</h4>
              <p>
                <span>T</span>écnico em Marketing, jogador profissional de
                Pokemon Unite, tenho contato com esse mundo da tecnologia desde
                jovem e sempre me interessei nessa área pois ela esta
                relacionada a tudo atualmente, entrei na Kenzie para me conectar
                com este mundo e ter a oportunidade de aprender e trabalhar em
                cima dessas tecnologias que estão cada vez mais presentes no
                nosso dia à dia.
              </p>
            </div>
            <img src={AndreImage} alt="" />
          </AboutMeCard>
          <h3 className="qualificationsTitle">Qualificações</h3>
          <QualificationCard id="2">
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <Button size="5px">
                    <AiOutlineArrowRight />
                  </Button>
                ),
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <Button size="5px" className="backwardBtn">
                    <AiOutlineArrowLeft />
                  </Button>
                ),
              }}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
            >
              <img src={Certificado} alt="" />
              <img src={Certificado} alt="" />
            </ReactSimplyCarousel>
          </QualificationCard>
          <h3 className="qualificationsTitle">Projetos</h3>
          <ProjectsCard id="3">
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex2}
              onRequestChange={setActiveSlideIndex2}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <Button size="5px">
                    <AiOutlineArrowRight />
                  </Button>
                ),
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <Button size="5px" className="backwardBtn">
                    <AiOutlineArrowLeft />
                  </Button>
                ),
              }}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
            >
              <div className="cardsProjects">
                <h3>NuKenzie</h3>
                <img src={nuKenzie} alt="" />
                <div className="references">
                  <div className="tecGroupBtns">
                    <button className="tecBtns">ReactJS</button>
                    <button className="tecBtns">Javascript</button>
                    <button className="tecBtns">CSS</button>
                  </div>
                  <div className="links">
                    <a
                      href="https://react-entrega-s1-nu-kenzie-andre-abreu20.vercel.app/
GIT"
                    >
                      <RiPagesLine /> Site
                    </a>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-andre-abreu20">
                      <AiFillGithub /> Git
                    </a>
                  </div>
                </div>
              </div>
              <div className="cardsProjects">
                <h3>Quackritics</h3>
                <img src={quackritics} alt="" />
                <div className="references">
                  <div className="tecGroupBtns">
                    <button className="tecBtns">JsonServer</button>
                    <button className="tecBtns">FakeAPI</button>
                    <button className="tecBtns">ReactJS</button>
                  </div>
                  <div className="links">
                    <a href="https://capstone-vilson-grupo-1.vercel.app/">
                      <RiPagesLine /> Site
                    </a>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/capstone-vilson-grupo1">
                      <AiFillGithub /> Git
                    </a>
                  </div>
                </div>
              </div>
              <div className="cardsProjects">
                <h3>KenzieHub</h3>
                <img src={kenzieHub} alt="" />
                <div className="references">
                  <div className="tecGroupBtns">
                    <button className="tecBtns">ReactJS</button>
                    <button className="tecBtns">JavaScript</button>
                    <button className="tecBtns">Axios</button>
                  </div>
                  <div className="links">
                    <a href="https://react-entrega-s2-kenzie-hub-andre-abreu20.vercel.app/dashboard">
                      <RiPagesLine /> Site
                    </a>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-andre-abreu20">
                      <AiFillGithub /> Git
                    </a>
                  </div>
                </div>
              </div>
              <div className="cardsProjects">
                <h3>Torre de Hanoi</h3>
                <img src={torreHanoi} alt="" />
                <div className="references">
                  <div className="tecGroupBtns">
                    <button className="tecBtns">Javascript</button>
                    <button className="tecBtns">HTML</button>
                    <button className="tecBtns">CSS</button>
                  </div>
                  <div className="links">
                    <a href="https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-andre-abreu20/">
                      <RiPagesLine /> Site
                    </a>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-andre-abreu20">
                      <AiFillGithub /> Git
                    </a>
                  </div>
                </div>
              </div>
              <div className="cardsProjects">
                <h3>KenzieBurguer</h3>
                <img src={kenzieBurguer} alt="" />
                <div className="references">
                  <div className="tecGroupBtns">
                    <button className="tecBtns">ReactJS</button>
                    <button className="tecBtns">Axios</button>
                    <button className="tecBtns">JavaScript</button>
                  </div>
                  <div className="links">
                    <a
                      href="https://react-entrega-s1-hamburgueria-da-kenzie-andre-abreu20.vercel.app/
"
                    >
                      <RiPagesLine /> Site
                    </a>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-andre-abreu20">
                      <AiFillGithub /> Git
                    </a>
                  </div>
                </div>
              </div>
            </ReactSimplyCarousel>
          </ProjectsCard>
        </TopicsList>
      </Container>
    </>
  );
}
