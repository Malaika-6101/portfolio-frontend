import "./about.css"
function Qualities() {
  return (

    <div className="qualities">

      <div className="quality-card">

        <div className="quality-icon">
          <i className="fa-regular fa-lightbulb"></i>
        </div>

        <h3>
          Problem Solver
        </h3>

        <p>
          I enjoy analyzing complex problems and
          finding practical, efficient solutions.
        </p>

      </div>

      <div className="quality-card">

        <div className="quality-icon">
         <i className="fa-solid fa-code"></i>
        </div>

        <h3>
          Clean Code
        </h3>

        <p>
         I focus on writing readable, maintainable, scalable, and efficient code.
        </p>

      </div>

      <div className="quality-card">

        <div className="quality-icon">
          <i className="fa-solid fa-rocket"></i>
        </div>

        <h3>
          Quick Learner
        </h3>

        <p>
          I enjoy learning new technologies
          and continuously improving my skills.
        </p>

      </div>

      <div className="quality-card">

        <div className="quality-icon">
         <i className="fa-solid fa-user-group"></i>
        </div>

        <h3>
          Team Player
        </h3>

        <p>
          I communicate effectively and enjoy
          collaborating to build quality software.
        </p>

      </div>

    </div>

  );
}

export default Qualities;