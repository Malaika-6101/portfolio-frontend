import { motion } from "framer-motion";

function OtherProjects({ projects }) {

  return (

    <section className="other-projects">

      {/* Header */}

      <motion.div
        className="other-projects-header"

        initial={{
          opacity: 0,
          y: 30
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        viewport={{
          once: true
        }}

        transition={{
          duration: 0.6
        }}
      >

        <span className="section-tag">
          OTHER PROJECTS
        </span>

        <h2>
          More <span>Projects</span>
        </h2>

        <div className="section-underline">
          <span></span>
        </div>

        <p>
          Explore some of my other projects and work.
        </p>

      </motion.div>


      {/* Project Cards */}

      <div className="other-projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="other-project-card"

            key={project.id}

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
              duration: 0.5,
              delay: index * 0.1
            }}
          >

            <h3>
              {project.title}
            </h3>


            <p className="other-project-description">
              {project.description}
            </p>


            {/* Technologies */}

            <div className="other-project-tech">

              {project.technologies.map((tech, index) => (

                <span key={index}>
                  {tech}
                </span>

              ))}

            </div>


            {/* Links */}

            <div className="other-project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                GitHub
              </a>


              {project.live && (

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </a>

              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default OtherProjects;