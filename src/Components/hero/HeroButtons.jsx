import {downloadResume} from "../../utils/downloadresume"
function HeroButtons() {
  return (
    <div className="hero-buttons">

      <a href="#projects" className="primary-btn">
        View My Work
      </a>

      <a
       onClick={downloadResume}
        className="secondary-btn"
      >
        Download Resume
      </a>

    </div>
  );
}

export default HeroButtons;