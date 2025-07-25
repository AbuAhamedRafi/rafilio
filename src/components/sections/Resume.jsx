import { motion } from "framer-motion";
import { DocumentTextIcon, ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/outline";
import user_info from "../../data/user_info.js";
import Fade from "../Fade.jsx";
import { getAssetPath } from "../../utils/assets.js";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = getAssetPath(user_info.resume.resumeLink);
    link.setAttribute("download", "Abu_Ahamed_Rafi.pdf");
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="resume"
      className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <Fade>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              variants={cardVariants}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <DocumentTextIcon className="h-12 w-12 text-red-800 dark:text-red-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
                Resume
              </h2>
            </motion.div>
            
            <motion.p
              variants={cardVariants}
              className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              {user_info.resume.description}
            </motion.p>
          </motion.div>
        </Fade>

        <Fade>
          <motion.div
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-red-200 dark:hover:border-red-800"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            
            {/* Resume Preview Card */}
            <motion.div variants={cardVariants} className="relative z-10">
              <div className="flex flex-col items-center gap-6">
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                  <motion.button
                    variants={cardVariants}
                    onClick={() => window.open(getAssetPath(user_info.resume.resumeLink), '_blank')}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-105 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon className="h-4 w-4" />
                    View Resume
                  </motion.button>

                  <motion.button
                    variants={cardVariants}
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        </Fade>
      </div>
    </section>
  );
}

export default Resume;
