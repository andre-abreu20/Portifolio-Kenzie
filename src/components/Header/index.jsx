import Button from "../Button";
import { Container } from "./styles";

export default function Header() {
  function handleScrollBar(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const location = document.getElementById(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 270,
    });
  }

  return (
    <Container>
      <h1>Meet André</h1>
      <nav>
        <button
          className="primaryButton"
          href="sobre"
          id="1"
          onClick={handleScrollBar}
        >
          Sobre
        </button>

        <button
          className="primaryButton"
          href="qualificações"
          onClick={handleScrollBar}
        >
          Qualificações
        </button>

        <button
          className="primaryButton"
          href="projetos"
          onClick={handleScrollBar}
        >
          Projetos
        </button>

        <Button
          string={"Contato"}
          size="10px"
          href="contato"
          onClick={handleScrollBar}
        />
      </nav>
    </Container>
  );
}
