

import { motion } from "framer-motion";
import { techStack } from "../../Pages/skills";

function TechStack() {
  return (
    <div className="tech-stack">

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Tech Stack
      </motion.h3>

      <div className="tech-grid">

        {techStack.map((tech, index) => (

          <motion.div
            key={tech.id}
            className="tech-card"

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.2,
              delay: index * 0.1,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -5,
              scale: 1.05,
            }}

          >

            <i className={tech.icon}></i>

            <span>{tech.name}</span>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default TechStack;