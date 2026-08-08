import { motion } from "framer-motion";

function TechStack({ project }) {
  return (
    <section className="project-tech">

      <h3 className="tech-title">
        TECH STACK
      </h3>

      <div className="stack-list">

        {project.technologies.map((tech, index) => (

          <motion.div
            key={tech.id}
            className="stack-item"

            initial={{
              opacity: 0,
              x: 30
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: .4,
              delay: index * .08
            }}

            whileHover={{
              x: 8
            }}
          >

            <i className={tech.icon}></i>

            <span>{tech.name}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default TechStack;