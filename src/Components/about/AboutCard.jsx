import "./about.css"
import StatsCards from "./StatCards";
import AboutButtons from "./AboutButtons";
import InfoCard from "./InfoCard";

function AboutCard() {
  return (
    <div className="about-left">

      <span className="section-tag">
        GET TO KNOW ME
      </span>

      <h2 className="about-heading">
        About Me
      </h2>

      <p className="about-text">

        I'm Malaika Navid, a Computer Science graduate with a
        passion for developing modern web applications that
        solve real-world problems.

      </p>

      <p className="about-text">

        My expertise includes React.js, Node.js,
        Express.js, Firebase Firestore and JavaScript.
        I enjoy learning new technologies and building
        clean, responsive and user-friendly applications.

      </p>
     

      <StatsCards />

      <AboutButtons />

    </div>
  );
}

export default AboutCard;