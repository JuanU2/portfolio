import "./about-me.css"
import Sk from "../../assets/slovakia.svg"
import Es from "../../assets/spain.svg"

export default function AboutMe() {
  return (
    <div className="about-me">
        <div className="my-story">
        <h3>
            Something about me:
        </h3>
        <div className="my-story__text">
            <section>
                I was born in Slovakia in 2003. 
                I studied at a bilingual high school in 
                spanish.
                I know <b>spanish</b>, <b>english</b> and of course <b>slovak/czech</b>.
                <br />
                I like to learn new skills, and everything I do, <b>I try to do the best of my ability</b>.
            </section>
            <div className="my-story__text__flags">
                <img src={Sk} alt="Slovak Flag" className="flag"/>
                <img src={Es} alt="Spanish Flag" className="flag"/>
            </div>
        </div>
        </div>
    </div>
  )
}
