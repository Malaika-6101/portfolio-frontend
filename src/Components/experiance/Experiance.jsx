import "./experience.css";

import { experiences } from "../../Pages/experiance";

import Timeline from "./Timeline";
import ExperienceStats from "./ExperienceStats";

function Experience() {

  return (

    <section id="experience" className="experience">

      <div className="experience-container">

        <div className="experience-heading">

          <span className="section-tag">
            MY JOURNEY
          </span>

          <h2>
            Experience
          </h2>

          <p>
            My academic background and professional experiences have
            shaped my skills, work ethic, and passion for building
            impactful software solutions.
          </p>

        </div>

        <Timeline
          experiences={experiences}
        />

        <ExperienceStats />

      </div>

    </section>

  );

}

export default Experience;
