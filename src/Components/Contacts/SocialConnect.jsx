import { motion } from "framer-motion";
import { socialLinks } from "../../Pages/socials"

function SocialConnect() {

  

  return (

    <motion.div
      className="social-connect"

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.6,
      }}
    >

      {/* LEFT SIDE */}

      <div className="social-left">

        <div className="social-heading">

          <h2>
            Let’s Connect on
          </h2>

          <div className="card-underline"></div>

        </div>


        <div className="social-links">

          {socialLinks.map((social) => (

          <motion.a
  key={social.id}
  href={social.link}
  className="social-item"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.95 }}
>

              <div className="social-icon">

                <i className={social.icon}></i>

              </div>

              <span>
                {social.name}
              </span>

            </motion.a>

          ))}

        </div>

      </div>


      {/* DIVIDER */}

      <div className="social-divider"></div>


      {/* RIGHT SIDE */}

      <div className="social-right">

        <div className="contact-illustration">

          {/* Replace this with your image later */}

          <div className="illustration-placeholder">

            <i className="fa-regular fa-envelope"></i>

            <i className="fa-solid fa-paper-plane"></i>

          </div>

        </div>


        <p>
          I’m always excited to discuss new projects,
          creative ideas or opportunities to be part
          of your visions.
        </p>

      </div>

    </motion.div>

  );
}

export default SocialConnect;