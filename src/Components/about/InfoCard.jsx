
import "./about.css"
function InfoCard() {
  return (
    <div className="info-card">

      <div className="info-item">

        <div className="info-icon">
         <i className="fa-solid fa-graduation-cap"></i>
        </div>

        <div>

          <h4>Education</h4>

          <p>
            BS Computer Science
          </p>

        </div>

      </div>

      <div className="info-item">

        <div className="info-icon">
         <i className="fa-solid fa-location-dot"></i>
        </div>

        <div>

          <h4>Location</h4>

          <p>
            Pakistan
          </p>

        </div>

      </div>

      <div className="info-item">

        <div className="info-icon">
         <i className="fa-solid fa-globe"></i>
        </div>

        <div>

          <h4>Languages</h4>

          <p>
            English, Urdu
          </p>

        </div>

      </div>

      <div className="info-item">

        <div className="info-icon">
         <i className="fa-solid fa-briefcase"></i>
        </div>

        <div>

          <h4>Availability</h4>

          <p>
            Open to Opportunities
          </p>

        </div>

      </div>

    </div>
  );
}

export default InfoCard;