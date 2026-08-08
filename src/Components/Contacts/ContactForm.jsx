// import { motion } from "framer-motion";

// function ContactForm() {

//   return (

//     <motion.div
//       className="contact-form-card"

//       initial={{
//         opacity: 0,
//         x: 50
//       }}

//       whileInView={{
//         opacity: 1,
//         x: 0
//       }}

//       viewport={{
//         once: true,
//         amount: 0.2
//       }}

//       transition={{
//         duration: 0.6
//       }}
//     >

//       <div className="contact-card-heading">

//         <h2>
//           Send Me a Message
//         </h2>

//         <div className="card-underline"></div>

//       </div>


//       <form>

//         {/* Name */}

//         <div className="form-group">

//           <label htmlFor="name">
//             Your Name
//           </label>

//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//           />

//         </div>


//         {/* Email */}

//         <div className="form-group">

//           <label htmlFor="email">
//             Your Email
//           </label>

//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//           />

//         </div>


//         {/* Subject */}

//         <div className="form-group">

//           <label htmlFor="subject">
//             Subject
//           </label>

//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             placeholder="How can I help you?"
//           />

//         </div>


//         {/* Message */}

//         <div className="form-group">

//           <label htmlFor="message">
//             Message
//           </label>

//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             placeholder="Write your message here..."
//           ></textarea>

//         </div>


//         {/* Submit */}

//         <motion.button
//           type="submit"
//           className="contact-submit"

//           whileHover={{
//             y: -3
//           }}

//           whileTap={{
//             scale: 0.97
//           }}
//         >

//           <i className="fa-regular fa-paper-plane"></i>

//           Send Message

//         </motion.button>

//       </form>

//     </motion.div>

//   );
// }

// export default ContactForm;







import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../../services/contactService";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await submitContactForm(formData);
      setIsSuccess(true);
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(error.message || "Something went wrong while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-form-card"
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="contact-card-heading">
        <h2>Send Me a Message</h2>
        <div className="card-underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can I help you?"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          className="contact-submit"
          disabled={loading}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <i className="fa-regular fa-paper-plane"></i>
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {statusMessage && (
          <p
            className="form-status-message"
            style={{
              marginTop: "15px",
              color: isSuccess ? "#4ade80" : "#f87171",
              fontSize: "0.9rem",
            }}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactForm;