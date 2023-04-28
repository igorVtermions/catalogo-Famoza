import { Nav } from "./style";
import logo from "../../assets/logo.png";
import Lupa from "../../assets/lupa.png";
import Caixa from "../../assets/caixa.png";

export function Navbar() {
  return (
    <Nav>
      <div className="header">
        <a href="#" className="logo">
          <img src={logo} alt="Logo da Famoza Uniformes" className="logoImg" />
        </a>

        <div className="containerSearch">
          <input type="search" className="search" />
          <button className="magn">
            <img src={Lupa} alt="lupa" className="magnImg" />
          </button>
        </div>

        <a href="" className="itens">
          <img src={Caixa} alt="caixa" /> Meus Produtos
        </a>
      </div>
    </Nav>
  );
}
