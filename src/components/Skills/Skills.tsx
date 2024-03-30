import "./skills.css"
import TimeLine from "../TimeLine/TimeLine";

export default function Skills() {
  return (
    <div className="skills">
        <h3 className="skills__headline">
            During my studies at the faculty, I have learned some <br /><strong>skills:</strong>
        </h3>
        <TimeLine/>
    </div>
  );
}
