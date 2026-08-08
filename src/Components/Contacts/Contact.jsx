import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialConnect from "./SocialConnect";

import "./contact.css";

function Contact() {

  return (

    <section
      id="contact"
      className="contact"
    >

      {/* ================================
          PHASE 1 — HEADER
      ================================= */}

      <div className="contact-header">

        <motion.span
          className="section-tag"

          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.5
          }}
        >
          GET IN TOUCH
        </motion.span>


        <motion.h1
          initial={{
            opacity: 0,
            y: 25
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.6,
            delay: 0.1
          }}
        >
          Let’s <span>Connect</span>
        </motion.h1>


        <motion.div
          className="section-underline"

          initial={{
            width: 0,
            opacity: 0
          }}

          whileInView={{
            width: "70px",
            opacity: 1
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.6,
            delay: 0.2
          }}
        >
          <span></span>
        </motion.div>


        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.6,
            delay: 0.25
          }}
        >
          I’m currently open to internships and full-time opportunities.
          <br />

          Whether you have a question or just want to say hi, I’ll try my
          <br className="desktop-break" />

          best to get back to you!
        </motion.p>

      </div>


      {/* ================================
          PHASE 2 — CONTACT CARDS
      ================================= */}

      <div className="contact-main">

        <ContactInfo />

        <ContactForm />

      </div>


      {/* ================================
          PHASE 3 — SOCIAL CONNECT
      ================================= */}

      <SocialConnect />

    </section>

  );

}

export default Contact;