import WhatsApp from "../../assets/whatsapp-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import GitImg from "../../assets/github-icon.png"
import {user} from "../../data/user/"

export const Footer = () => {

    return(
        <>
        <footer>
            <div>
                <h1>Contato</h1>
                <div>
                    <img src={WhatsApp} alt="#" />
                    <img src={Linkedin} alt="#" />
                    <img src={GitImg} alt="#" />
                </div>
            </div>
            <p>Todos os direitos reservados - {user}</p>
        </footer>
        </>

    )
}