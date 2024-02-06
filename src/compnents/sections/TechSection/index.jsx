import { technologies } from "../../../data/technologies";

export const TecnologiesCard = () => {
    return (
        <>
        <h1>Tecnologias</h1>
        {
            technologies.map((tech) => {
                return(

                    <li>
                    <img src={tech.img} />
                    <p>{tech.name}</p>        
                    </li>

                )
            })
        }
      </>
    );
  };


