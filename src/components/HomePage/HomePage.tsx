import Introduce from "../Introduction"
import Skills from "../Skills/Skills"
import AboutMe from "../AboutMe/AboutMe"
import "./homepage.css"
function HomePage() {
  return (
    <main>
    <div className="home-head">
        <Introduce/>
    
        <hr />
        <AboutMe/>
        <hr />
    </div>
      <Skills/>
    </main>
  )
}

export default HomePage