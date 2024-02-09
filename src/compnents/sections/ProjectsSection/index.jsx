import { projects } from "../../../data/projects";
import GitImg from "../../../assets/git-icon.png";
import styles from "./../ProjectsSection/ProjectCard/styles.module.css"


export const ProjectsCard = () => {
    return (
        <>
        <section className={styles.projectCardSection}>
            <h1 className="title1">Projetos</h1>
            <div className={styles.cardContainer}>
            {
            projects.map((project) => {
                return(
                    
                    <div className="projectCardContainer">
                        <li className="projectCard" >
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                            <a href="#">Saiba mais</a>
                                                 
                        </li>
                        <img src={GitImg} alt="#" />
                    </div>
                )
            })
            }
            </div>
        </section>
      </>
    );
  };

