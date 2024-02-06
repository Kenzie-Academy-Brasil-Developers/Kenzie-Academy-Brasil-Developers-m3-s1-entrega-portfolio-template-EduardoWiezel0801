import { projects } from "../../../data/projects";
import GitImg from "../../../assets/github-icon.png"

export const ProjectsCardCard = () => {
    return (
        <>
        <h1>Projetos</h1>
        {
            projects.map((project) => {
                return(
                    
                    <li>
                        <p>{project.name}</p>
                        <p>{project.description}</p>
                        <a href="#">Saiba mais</a>
                        <img src={GitImg} alt="#" />
                         
                    </li>

                )
            })
        }
      </>
    );
  };

