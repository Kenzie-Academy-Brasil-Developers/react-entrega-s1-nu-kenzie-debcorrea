import Logo from "./../../assets/images/Nu KenzieLanding.svg";
import { Link } from "react-router-dom";
import "./style.css";

function TextSection() {
  return (
    <section className="containerTexts">
      <img src={Logo} alt="Logo Nu Kenzie de cores rosa e branco" />
      <h1>Centralize o controle das suas finanças</h1>
      <span>de forma rápida e segura</span>
      <Link to="/home">
        <button className="landingButton">Iniciar</button>
      </Link>
    </section>
  );
}

export default TextSection;
