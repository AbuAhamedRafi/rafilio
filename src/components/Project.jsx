import { CiLink } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

function Project({ title, description, technologies, link, github }) {
  return (
    <div className="shadow-lg transition-transform duration-500 hover:scale-105 p-3 md:rounded-xl">
      <div className="flex gap-2 overflow-x-scroll py-2">
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-xl text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {link && (
          <a
            href={link}
            className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Project</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          >
            <SiGithub className="text-2xl self-center" />
            <span className="text-xs self-center">View Github</span>
          </a>
        )}
      </div>
      <div className="mt-4 h-[1px] bg-zinc-200 dark:bg-zinc-700"></div>
    </div>
  );
}

export default Project;
