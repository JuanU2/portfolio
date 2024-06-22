import Introduce from "../Introduction"
import Skills from "../Skills/Skills"
import AboutMe from "../AboutMe/AboutMe"
import "./homepage.css"
function HomePage() {
  return (
    <main>
    <div className="home-head">
        <Introduce/>
        <div>
          <div className="introduction__text-container--homepage">
            <h1 className="introduction__headline">
                Hey ! <br /> I'm Juan...
            </h1>
          <section className="introduction__description">
              I am a student at Faculty of informatics of Masaryk University.
          </section>
          </div>
          <hr className="ciara"/>
            <AboutMe/>
          <hr className="ciara"/>
      </div>
    </div>
      <Skills/>
    </main>
  )
}

export default HomePage