
import Profile from "../assets/profile.jpg"
import "./introduction.css"

export default function Introduce() {
  return (
    <div className="introduction">
        <img className="introduction__profile" src={Profile} alt="Profile" />
        <div className="introduction__text-container">
          <h1 className="introduction__headline">
              Hey ! <br /> I'm Juan...
          </h1>
          <section className="introduction__description">
              I am a student at Faculty of informatics of Masaryk University.
          </section>
        </div>
    </div>
  )
}
