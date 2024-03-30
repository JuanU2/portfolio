import TimeLine from "../TimeLine/TimeLine"
import NavBar from "../NavBar/NavBar"
import FI from "../../assets/FIMU.jpg"
import "./studies.css"
export default function Studies() {
  return (
    <main className="studies">
        <NavBar/>
        <div className="text-content">
            <h2 className="main-headline">This is where I study:</h2>
            <img src={FI} alt="FI MUNI" className="fi-img" />
            <section>
                
            </section>
        </div>
        <TimeLine/> 
    </main>
  )
}
