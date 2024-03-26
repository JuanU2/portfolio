import Introduce from "../Introduction"
import Skills from "../Skills/Skills"
import AboutMe from "../AboutMe/AboutMe"
import NavBar from "../NavBar/NavBar"
import "./homepage.css"
function HomePage() {
  return (
    <>
        <NavBar/>
    <div className="home-head">
        <Introduce/>
    
        <hr />
        <AboutMe/>
        <hr />
    </div>
      <Skills/>
    </>
  )
}

export default HomePage