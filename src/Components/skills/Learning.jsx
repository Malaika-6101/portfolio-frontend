import { learning } from "../../Pages/skills";

function Learning() {

  return (

    <div className="learning-card">

      <div className="learning-header">

        <i className={learning.icon}></i>

        <h3>
          {learning.title}
        </h3>

      </div>

      <p>
        {learning.description}
      </p>

      <div className="learning-skills">

        {learning.skills.map((item) => (

          <span
            key={item}
            className="learning-badge"
          >
            {item}
          </span>

        ))}

      </div>

    </div>

  );

}

export default Learning;