import ExperienceCard from "./ExperianceCard";

function Timeline({ experiences }) {

  return (

    <div className="timeline">

      {experiences.map((experience) => (

        <ExperienceCard

          key={experience.id}

          experience={experience}

        />

      ))}

    </div>

  );

}

export default Timeline;