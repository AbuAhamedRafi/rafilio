import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { BiTask } from "react-icons/bi";
import Fade from "../Fade.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 md:h-screen min-h-screen flex flex-col justify-center items-center py-8"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-4xl dark:text-white mb-4 font-extrabold flex gap-2 items-center">
          <BiTask className="text-4xl text-red-800 dark:text-red-500" />
          Projects
        </h2>
      </div>

      <Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16 py-8">
          {user_info.projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                link={project.link}
              />
            );
          })}
        </div>
      </Fade>
    </section>
  );
}

export default Projects;
