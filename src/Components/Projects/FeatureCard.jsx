import { motion } from "framer-motion";

function FeatureCard({ project }) {

  return (

    <section className="project-features">

      <div className="features-heading">

        <span className="section-tag">
          FEATURES
        </span>

        <h2>
          Key Features
        </h2>

        <p>
          The core functionalities that make SpotFinder
          a complete smart parking solution.
        </p>

      </div>

      <div className="features-grid">

        {project.features.map((feature, index) => (

          <motion.div

            key={index}

            className="feature-card"

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
              duration: .5,
              delay: index * .12
            }}

            whileHover={{
              y: -8,
              scale: 1.03
            }}

          >

            <div className="feature-icon">

              <i className={feature.icon}></i>

            </div>

            <h3>

              {feature.title}

            </h3>

            <p>

              {feature.description}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default FeatureCard;