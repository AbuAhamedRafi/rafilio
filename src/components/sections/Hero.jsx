import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import user_info from "../../data/user_info.js";
import { scrollToElement } from "../../utils/helpers.js";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative scroll-mt-16 min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-blue-50/30 dark:from-red-950/20 dark:via-transparent dark:to-blue-950/10" />
      
      <motion.div
        className="relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full text-zinc-900 dark:text-zinc-100 flex flex-col md:grid md:grid-cols-3 items-center gap-10 lg:gap-16">
          
          {/* Image Section */}
          <motion.div
            className="md:col-span-1 order-1 md:order-2 flex justify-center w-1/2 md:w-full mt-10 md:mt-0"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur opacity-20" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-3xl blur opacity-30" />
              
              <img
                className="relative rounded-3xl transform rotate-3 w-full max-w-sm md:max-w-full shadow-2xl hover:rotate-0 transition-transform duration-500"
                src={user_info.main.photo}
                alt={`${user_info.main.name} - ${user_info.main.role}`}
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="md:col-span-2 order-2 md:order-1 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="font-black mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-full">
                <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 dark:from-red-400 dark:via-red-500 dark:to-red-600 bg-clip-text text-transparent">
                  {user_info.main.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-zinc-900 dark:text-white">
                  {user_info.main.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="md:text-2xl text-xl mt-4 font-semibold text-zinc-700 dark:text-zinc-300">
                {user_info.main.role}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="mt-6 dark:text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-8 max-w-2xl">
                {user_info.main.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToElement('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <ChevronDownIcon className="inline-block w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
