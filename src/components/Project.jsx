import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils/cn";

function Project({ title, description, technologies, link, github }) {
  const techArray = technologies.split(",").map(tech => tech.trim());

  return (
    <motion.div
      className={cn(
        "group relative bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg",
        "border border-zinc-200 dark:border-zinc-800",
        "hover:shadow-xl hover:-translate-y-2 transition-all duration-300",
        "hover:border-red-200 dark:hover:border-red-800"
      )}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      
      {/* Tech badges */}
      <div className="flex gap-2 flex-wrap mb-4">
        {techArray.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
              "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
            )}
          >
            {tech}
          </span>
        ))}
        {techArray.length > 3 && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            +{techArray.length - 3} more
          </span>
        )}
      </div>

      {/* Project title */}
      <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
        {title}
      </h3>

      {/* Project description */}
      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      {/* Action buttons */}
      <div className="flex gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
              "bg-red-600 text-white hover:bg-red-700",
              "transition-all duration-300 hover:scale-105"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            Live Demo
          </motion.a>
        )}
        
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
              "border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="w-4 h-4" />
            Source Code
          </motion.a>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default Project;
