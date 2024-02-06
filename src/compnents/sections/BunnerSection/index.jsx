import BunnerImg from "../../../assets/banner-img.png"


export const BunnerSection = () => {

    return (
        <section>
            <div>
                <h3>José da Silva</h3>               
                <h1> Bem vindo ao meu portifólio</h1>        
                <p> Uma frase interessanta sobre mim.</p>
                <button> Saiba mais</button>
            </div>
            <div>
                <img src= {BunnerImg} alt="#" />
            </div>
        </section> 
    )
}    