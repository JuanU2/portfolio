import { useState } from "react";
import "./skills.css"

export default function Skills() {
    const [skill, setSkill] = useState(<></>);
  return (
    <div className="skills">
        <h3 className="skills__headline">
            During my studies at the faculty, I have learned some <br /><strong>skills:</strong>
        </h3>
        <ul className="skill-container">
            <h4>Theoretical knowledge</h4>
            <li className="skill-container__skill">OOP</li>
            <li className="skill-container__skill">Algorithms and data structures</li>
            <li className="skill-container__skill">Database design</li>
            <h4>Programming languages</h4>
            <li className="skill-container__skill">C language</li>
            <li className="skill-container__skill">Java</li>
            <li className="skill-container__skill">C#</li>
            <li className="skill-container__skill">React</li>
            <li className="skill-container__skill">TypeScript</li>
            <li className="skill-container__skill">HTML/CSS</li>
            <li className="skill-container__skill">Haskell</li>
            <li className="skill-container__skill">SQL</li>
            <li className="skill-container__skill">Python</li>
        </ul>
    </div>
  );
}
