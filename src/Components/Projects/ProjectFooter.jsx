import { motion } from "framer-motion";

function ProjectFooter({ project }) {

  return (

    <motion.section

      className="project-footer"

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
        duration: .5
      }}

    >

      <div className="footer-item">

        <div className="footer-icon">

          <i className="fa-regular fa-circle-check"></i>

        </div>

        <div>

          <span>Status</span>

          <h4>{project.status}</h4>

        </div>

      </div>



      <div className="footer-item">

        <div className="footer-icon">

          <i className="fa-solid fa-code"></i>

        </div>

        <div>

          <span>Role</span>

          <h4>{project.role}</h4>

        </div>

      </div>



      <div className="footer-item">

        <div className="footer-icon">

          <i className="fa-regular fa-calendar"></i>

        </div>

        <div>

          <span>Duration</span>

          <h4>{project.duration}</h4>

        </div>

      </div>

    </motion.section>

  );

}

export default ProjectFooter;