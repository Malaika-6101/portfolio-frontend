import "./projects.css";

import {
  projects,
  otherProjects
} from "../../Pages/projects";

import ProjectCard from "./ProjectCard";
import FeatureCard from "./FeatureCard";
import Architecture from "./Architecture";
import TechStack from "./TechStack";
import ScreenshotSlider from "./ScreenShotSlider";
import Responsibilities from "./Responsibilities";
import ProjectFooter from "./ProjectFooter";
import OtherProjects from "./OtherProjects"

function Projects() {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  return (

    <section id="projects" className="projects">

      <div className="project-container">

        <ProjectCard
          project={featuredProject}
        />

        <FeatureCard
          project={featuredProject}
        />

        <div className="project-middle">

          <Architecture
            project={featuredProject}
          />

          <TechStack
            project={featuredProject}
          />

        </div>

        <div className="project-bottom">

          <ScreenshotSlider
            project={featuredProject}
          />

          <Responsibilities
            project={featuredProject}
          />

        </div>
      
      

        <ProjectFooter
          project={featuredProject}
        />

         <OtherProjects
  projects={otherProjects}
/>

      </div>

    </section>

  );

}

export default Projects;