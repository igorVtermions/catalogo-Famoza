import { Nav } from "./style";
import logo from "../../assets/logo.png";
import Lupa from "../../assets/lupa.png"

export function Navbar() {
  return (
    <Nav>
      <a href="#" className="logo">
        <img src={logo} alt="Logo da Famoza Uniformes" className="logoImg" />
      </a>

      <div className="containerSearch">
        <input type="search" className="search" />
        <button className="magn"><img src={Lupa} alt="lupa" className="magnImg" /></button>
      </div>
    
        <button className="wpp"> WhatsApp</button>
    </Nav>
  );
}
