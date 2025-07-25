import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import user_info from "../../data/user_info.js";
import Fade from "../Fade.jsx";
import { getAssetPath } from "../../utils/assets.js";

function Experience() {
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

  const timelineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="scroll-mt-16 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <Fade>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-white/50 dark:border-zinc-700/50"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-red-800 dark:text-red-500 flex-shrink-0" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
                  Professional Experience
                </h2>
              </div>
            </motion.div>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed px-4">
              A journey through innovation, growth, and impactful contributions
              in the tech industry
            </p>
          </div>
        </Fade>

        {/* Timeline and Cards */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on lg+ */}
          <motion.div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-sm z-10"
            style={{ height: "100%" }}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Mobile Timeline Line - Left-aligned for mobile */}
          <motion.div
            className="lg:hidden absolute left-6 w-0.5 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-sm z-10"
            style={{ height: "100%" }}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 lg:space-y-16"
          >
            {user_info.experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20 top-8">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 lg:border-4 border-white dark:border-zinc-900 shadow-lg relative z-10">
                        <div className="absolute inset-0.5 lg:inset-1 bg-white dark:bg-zinc-900 rounded-full"></div>
                        <div className="absolute inset-1 lg:inset-2 bg-gradient-to-br from-red-500 to-red-600 rounded-full"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full pl-12 lg:pl-0 lg:w-[48%] ${
                      isEven ? "lg:ml-auto lg:pl-8" : "lg:mr-auto lg:pr-8"
                    }`}
                  >
                    <motion.div 
                      className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-red-200 dark:hover:border-red-800"
                      whileHover={{ y: -8 }}
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                      
                      {/* Company Logo and Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 rounded-xl p-0.5 shadow-lg">
                            <img
                              className="w-full h-full rounded-lg object-cover"
                              src={getAssetPath(exp.image)}
                              alt={`${exp.company} Logo`}
                            />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                            {exp.position}
                          </p>
                        </div>
                      </div>

                      {/* Duration and Location badges */}
                      <div className="flex gap-2 flex-wrap mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                          {exp.duration}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                          Key Achievements
                        </h4>
                        {exp.descriptions.map((desc, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-300 group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
