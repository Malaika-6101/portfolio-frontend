import "./hero.css";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className=" hero-container">

        {/* Left Side */}

        <div className="hero-content">

          <span className="hero-greeting">
            Hi, I'm
          </span>

          <h1 className="hero-name">
            Malaika Navid
          </h1>

          <h2 className="hero-title">
           Frontend Developer
          </h2>

          <p className="hero-description">
             I build responsive and interactive web applications using React
    and JavaScript, with experience in Node.js, Express.js and
    Firebase Firestore. Passionate about creating impactful solutions
    and solving real-world problems.
          </p>

          <HeroButtons />

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <img
            src="src\assets\developer's image\ChatGPT Image Jul 23, 2026, 09_05_47 PM.png"
            alt="Developer Illustration"
          />

        </div>

      </div>

      {/* Featured Project */}

      <div className="hero-container-2">

        <a href="#projects" className="featured-project">

          <div className="featured-left">

            <span className="featured-icon">
              ⭐
            </span>

            <span className="featured-text">
              Featured Project
            </span>

          </div>

          <div className="featured-center">

            SpotFinder – Smart Parking Management System

          </div>

          <div className="featured-right">

            →

          </div>

        </a>

      </div>

    </section>
  );
}

export default Hero;