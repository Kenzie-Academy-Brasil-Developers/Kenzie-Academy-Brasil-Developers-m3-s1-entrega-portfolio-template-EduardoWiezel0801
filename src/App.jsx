import {Header} from "./compnents/Header"
import {BunnerSection} from "./compnents/sections/BunnerSection"
import { AboutMeSection } from "./compnents/sections/AboutMeSection"
import { TecnologiesCard} from "./compnents/sections/TechSection"
import { ProjectsCardCard } from "./compnents/sections/ProjectsSection"
import { Footer } from "./compnents/Footer"

import "./styles/index.css"

function App() {

  return (
    <>
    <Header />
    <BunnerSection />
    <AboutMeSection />
    <TecnologiesCard />
    <ProjectsCardCard />
    <Footer />      
    </>
  )
}

export default App
