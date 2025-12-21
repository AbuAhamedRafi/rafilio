import { motion } from "framer-motion";
import { useState } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import Fade from "../Fade.jsx";

const projectCategories = [
  { id: "all", label: "All Projects", icon: "🚀" },
  { id: "SaaS / Backend", label: "SaaS / Backend", icon: "☁️" },
  { id: "Logistics / Enterprise", label: "Logistics / Enterprise", icon: "🚛" },
  { id: "Open Source / Enterprise", label: "Open Source", icon: "🔓" },
  { id: "Backend / Security", label: "Backend / Security", icon: "🔒" },
  { id: "Backend", label: "Backend", icon: "⚙️" },
  { id: "Frontend", label: "Frontend", icon: "🎨" },
  { id: "Full-Stack", label: "Full-Stack", icon: "⚡" },
  { id: "Machine Learning", label: "Machine Learning", icon: "🤖" },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 },
  };

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? user_info.projects
      : user_info.projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="scroll-mt-16 min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24"
    >
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="flex justify-center items-center mb-6">
            <RocketLaunchIcon className="w-12 h-12 text-red-600 dark:text-red-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring web applications, APIs, and
            tools built with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <Fade delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 dark:shadow-red-600/50"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-800"
                }`}
                variants={tabVariants}
                animate={activeCategory === category.id ? "active" : "inactive"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
                {category.id === "all" && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === category.id
                        ? "bg-white/20"
                        : "bg-zinc-100 dark:bg-zinc-800"
                    }`}
                  >
                    {user_info.projects.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </Fade>

        {/* Projects Grid */}
        <Fade>
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    },
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    category={project.category}
                    github={project.github}
                    link={project.link}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </Fade>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.5 },
            },
          }}
        >
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href={user_info.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
