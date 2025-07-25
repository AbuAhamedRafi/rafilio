import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCplusplus,
  SiPostman,
  SiTailwindcss,
  SiLaravel,
  SiHtml5,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
import Fade from "../Fade";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-green-500" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "MySQL", icon: GrMysql, color: "text-blue-700" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: DiGithubAlt, color: "text-gray-800" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="w-full">
        {/* Section Header */}
        <Fade>
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <CodeBracketIcon className="w-12 h-12 text-red-600 dark:text-red-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                Technologies & Tools
              </h2>
            </div>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </Fade>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 hover:shadow-xl">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative text-center">
                  <skill.icon 
                    className={`text-4xl mx-auto mb-3 ${skill.color} dark:${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <Fade delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
              Always eager to learn new technologies and improve my skills
            </p>
            
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Currently exploring:
              </span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full text-xs font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                  Docker
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Skills;
