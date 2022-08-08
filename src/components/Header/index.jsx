import Button from "../Button";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>Meet André</h1>
      <nav>
        <a href="#1">
          <button className="primaryButton">Sobre</button>
        </a>
        <a href="#2">
          <button className="primaryButton">Qualificações</button>
        </a>
        <a href="#3">
          <button className="primaryButton">Projetos</button>
        </a>
        <a href="#4">
          <Button string={"Contato"} size="10px" />
        </a>
      </nav>
    </Container>
  );
}
