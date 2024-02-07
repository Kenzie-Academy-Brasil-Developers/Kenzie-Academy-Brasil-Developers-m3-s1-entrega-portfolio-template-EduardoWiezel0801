import BunnerImg from "../../../assets/banner-img.png"
import {user} from "../../../data/user/"
import styles from "./styles.module.css";

export const BunnerSection = () => {

    return (
        <section className={styles.bunnerSection}>
            <div className={styles.bunnerContainer}>
                <h3 className={styles.user}>{user}</h3>               
                <h1 className={styles.welcome}> Bem vindo ao meu portifólio</h1>        
                <p> Uma frase interessanta sobre mim.</p>
                <button className="btnContato"> Saiba mais</button>
            </div>
            <div>
                <img src= {BunnerImg} alt="#" />
            </div>
        </section> 
    )
}    