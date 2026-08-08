function SkillCard({ skill }) {

  return (

    <div className="skill-card">

      <div className="skill-icon">

        <i className={skill.icon}></i>

      </div>
<div className="skills-title"></div>
      <h3>
        {skill.title}
       
      </h3>

      <p>
        {skill.description}
      </p>

      <ul>

        {skill.technologies.map((tech) => (

          <li key={tech}>

            <i className="fa-solid fa-check"></i>

            {tech}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default SkillCard;