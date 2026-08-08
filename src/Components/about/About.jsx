import AboutCard from "./AboutCard";
import InfoCard from "./InfoCard";
import Qualities from "./Qualities";

import "./About.css";

function About() {
  return (
  <section className="about" id="about">

   <div className="about-container">

      <div className="about-grid">

         <AboutCard />

         <InfoCard />

      </div>

      <div className="qualities-wrapper">

         <Qualities />

      </div>

   </div>

</section>
  );
}

export default About;