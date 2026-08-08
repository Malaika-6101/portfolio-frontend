import { motion } from "framer-motion";

import { contactInfo} from "../../Pages/contact";

function ContactInfo() {

  return (

    <motion.div
      className="contact-info-card"

      initial={{
        opacity: 0,
        x: -50
      }}

      whileInView={{
        opacity: 1,
        x: 0
      }}

      viewport={{
        once: true,
        amount: 0.2
      }}

      transition={{
        duration: 0.6
      }}
    >

      <div className="contact-card-heading">

        <h2>
          Contact Information
        </h2>

        <div className="card-underline"></div>

      </div>


      <div className="contact-info-list">

        {contactInfo.map((item) => (

          <div
            className="contact-info-item"
            key={item.id}
          >

            <div className="contact-info-icon">

              <i className={item.icon}></i>

            </div>


            <div className="contact-info-content">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.value}
              </p>

              <span>
                {item.description}
              </span>

            </div>

          </div>

        ))}

      </div>

    </motion.div>

  );

}

export default ContactInfo;