import { motion } from "framer-motion";

function ProjectCard({ project }) {

  return (

    <section className="project-hero">

      {/* ===========================
          LEFT SIDE
      ============================ */}

      <motion.div
        className="project-left"

        initial={{
          opacity: 0,
          x: -80
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: .8
        }}

        viewport={{
          once: true
        }}
      >

        <span className="section-tag">

          Featured Project

        </span>

        <h2 className="about-heading">

          Spot <span className="proj-title-color">Finder</span>

        </h2>

        <h3 className="project-subtitle">

          {project.subtitle}

        </h3>

        <p className="about-text">

          {project.description}

        </p>


      </motion.div>

      {/* ===========================
          RIGHT SIDE
      ============================ */}

      <motion.div
        className="project-right"

        initial={{
          opacity: 0,
          x: 80
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: .8
        }}

        viewport={{
          once: true
        }}
      >

        {/* Laptop */}

        <motion.img

        src={project.heroImages.laptop}

          alt={project.title}

          className="laptop-image"

          animate={{
            y: [0, -12, 0]
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}

        />

       

      </motion.div>

    </section>

  );

}

export default ProjectCard;