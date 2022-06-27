import Button from "../Button";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>Meet André</h1>
      <div>
        <button className="primaryButton">Sobre</button>
        <button className="primaryButton">Qualificações</button>
        <button className="primaryButton">Projetos</button>
        <Button string={"Contato"} size="10px" />
      </div>
    </Container>
  );
}
