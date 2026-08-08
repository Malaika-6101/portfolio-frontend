import { motion } from "framer-motion";
import TimelineIcon from "./TimelineIcon";

function ExperienceCard({ experience }) {

  return (

    <motion.div

      className="timeline-item"

      initial={{
        opacity: 0,
        y: 50
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
        once: true
      }}

      transition={{
        duration: .5
      }}

    >

      <TimelineIcon
        icon={experience.icon}
      />

      <div className="experience-card">

        <div className="experience-top">

          <div>

            <h3>

              {experience.title}

            </h3>

            <h4>

              {experience.subtitle}

            </h4>

          </div>

          <div className="experience-date">

            <i className="fa-regular fa-calendar"></i>

            <span>

              {experience.duration}

            </span>

          </div>

        </div>

        <div className="experience-description">

          {experience.description.map((item, index) => (

            <p key={index}>

              {item}

            </p>

          ))}

        </div>

        {

          experience.skills.length > 0 && (

            <div className="experience-skills">

              {

                experience.skills.map((skill, index) => (

                  <span

                    key={index}

                    className="skill-badge"

                  >

                    {skill}

                  </span>

                ))

              }

            </div>

          )

        }

      </div>

    </motion.div>

  );

}

export default ExperienceCard;