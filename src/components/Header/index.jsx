import Logo from "./../../assets/images/Nu Kenzie.svg";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="Logo Nu Kenzie de cores rosa e preto" />
        <Link to='/'>
          <button className="headerButton">Início</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
