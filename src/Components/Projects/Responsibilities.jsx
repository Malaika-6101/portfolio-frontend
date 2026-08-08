
import { motion } from "framer-motion";

function Responsibilities({ project }) {

  return (

    <section className="responsibilities">

      <span className="section-tag-r">
        MY CONTRIBUTION
      </span>

      <h3 className="responsibilities-title">
        Responsibilities
      </h3>

      <div className="responsibilities-list">

        {project.responsibilities.map((item, index) => (

          <motion.div
            key={index}
            className="responsibility-item"

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
          >

            <div className="check-icon">

              <i className="fa-solid fa-check"></i>

            </div>

            <p>{item}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Responsibilities;