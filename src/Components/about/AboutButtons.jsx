import "./about.css"
import {downloadResume} from "../../utils/downloadresume"
function AboutButtons() {
  return (
    <div className="about-buttons">

      <a
        onClick={downloadResume}
        className="primary-btn-abt"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="secondary-btn-abt"
      >
        Let's Connect
      </a>

    </div>
  );
}

export default AboutButtons;