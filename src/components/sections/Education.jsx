import { motion } from "framer-motion";
import user_info from "../../data/user_info.js";
import { GiGraduateCap } from "react-icons/gi";
import { getAssetPath } from "../../utils/assets.js";
import Fade from "../Fade.jsx";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="education"
      className="scroll-mt-16 flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 bg-gradient-to-r"
    >
      <div className="w-full">
        <Fade>
          <div className="flex justify-center items-center">
            <h4 className="text-4xl dark:text-white mb-4 font-extrabold flex gap-2 items-center">
              <GiGraduateCap className="text-5xl text-red-800 dark:text-red-500" />
              Education
            </h4>
          </div>
        </Fade>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {user_info.education.map((edu, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative shadow-lg rounded-xl p-4 mb-4 mx-auto transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-800"
                whileHover={{ y: -8 }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex items-center gap-4 w-full md:w-1/3">
                    <img
                      className="w-16 h-16 rounded-full border-2 border-zinc-300 dark:border-zinc-600"
                      src={getAssetPath(edu.image)}
                      alt="School Logo"
                    />
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                      {edu.school}
                    </h3>
                  </div>

                  <div className="text-center md:w-1/3">
                    <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="text-right md:w-1/3">
                    <p className="text-lg uppercase text-zinc-500 dark:text-zinc-400">
                      {edu.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-[1px] bg-zinc-200 dark:bg-zinc-700"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
