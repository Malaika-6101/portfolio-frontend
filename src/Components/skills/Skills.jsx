import "./skills.css";

import { skillCategories } from "../../Pages/skills";

import SkillCard from "./SkillCard";
import Learning from "./Learning";
import TechStack from "./TechStack";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <div className="section-title">

          <span className="section-tag">
            MY EXPERTISE
          </span>

          <h2>
            Skills & Technologies
          </h2>

          <p>
            Technologies I use to build modern, responsive and
            scalable web applications.
          </p>

        </div>

        <div className="skills-grid">

          {skillCategories.map((skill) => (

            <SkillCard
              key={skill.id}
              skill={skill}
            />

          ))}

        </div>

       <Learning/>
       <TechStack/>

      </div>

    </section>
  );
}

export default Skills;