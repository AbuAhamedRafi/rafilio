import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-8"
    >

      <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-8">
        Projects
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16">
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
    </section>
  );
}

export default Projects;
