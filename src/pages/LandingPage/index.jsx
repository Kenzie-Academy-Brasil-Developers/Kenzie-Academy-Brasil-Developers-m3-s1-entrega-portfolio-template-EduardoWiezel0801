import {Header} from "../../Header"
import {BunnerSection} from "../../compnents/sections/BunnerSection"
import { AboutMeSection } from "../../compnents/sections/AboutMeSection"
import { TecnologiesCard} from "../../compnents/sections/TechSection"
import {ProjectsCard} from "../../compnents/sections/ProjectsSection"
import { Footer } from "../../Footer"

import "../../styles/index.css"

export const LandingPage = () => {
    return(
    <>
    <Header />
    <BunnerSection />
    <AboutMeSection />
    <TecnologiesCard />
    <ProjectsCard />
    <Footer />  
</>
    )
    

}