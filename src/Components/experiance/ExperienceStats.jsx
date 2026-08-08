import { motion } from "framer-motion";
import { experienceStats } from "../../Pages/experiance";

function ExperienceStats() {

  return (

    <section className="experience-stats">

      {

        experienceStats.map((item, index) => (

          <motion.div

            key={item.id}

            className="experience-stat"

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: .45,
              delay: index * .1
            }}

            whileHover={{
              y: -8
            }}

          >

            <div className="stat-icon">

              <i className={item.icon}></i>

            </div>

            <h3>

              {item.number}

            </h3>

            <h4>

              {item.title}

            </h4>

            <p>

              {item.text}

            </p>

          </motion.div>

        ))

      }

    </section>

  );

}

export default ExperienceStats;