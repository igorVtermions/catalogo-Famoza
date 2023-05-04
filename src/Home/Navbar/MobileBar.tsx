import "./styles.scss"
import {useState} from "react"
import ReactModal from "react-modal"
import Logo from "../../assets/logo.png"
import Lupa from "../../assets/lupa.png"
import Caixa from "../../assets/caixa.png"

export function MobileNav (){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="mobileNav">
          <div className="mobileHeader">
            <a href="#" className="logoMobile">
                <img src={Logo} alt="Logo da Famoza Uniformes" />
            </a>
            
          </div>
    </div>
    )
}
