import { Container, DevInfo } from "./styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <Container id="contato">
      <DevInfo>
        <div>
          <a href="https://github.com/andre-abreu20">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9mesquita/">
            <AiFillLinkedin />
          </a>
        </div>
        <p>Desenvolvido e criado por André Luís M. de Abreu, 2022</p>
      </DevInfo>
    </Container>
  );
}
