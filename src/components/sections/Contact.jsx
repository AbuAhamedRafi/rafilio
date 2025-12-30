import { motion } from "framer-motion";
import user_info from "../../data/user_info.js";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Fade from "../Fade.jsx";

function Contact() {
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 mt-16 pt-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24"
    >
      <div className="w-full">
        <Fade>
          <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Let&apos;s Get in Touch:{" "}
            <span className="text-red-800 dark:text-red-500">
              Ways to Connect with Me
            </span>
          </h4>

          <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
            {user_info.contact.description}
          </p>
        </Fade>

        <div className="flex justify-center items-center h-80 px-4">
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.a
              href={user_info.socials.linkedin}
              className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <FaLinkedin className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-600" />
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-700 dark:group-hover:text-blue-600">
                Follow on Linkedin
              </span>
            </motion.a>
            <motion.a
              href={user_info.socials.facebook}
              className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <FaFacebook className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Follow on Facebook
              </span>
            </motion.a>

            <motion.a
              href={user_info.socials.twitter}
              className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <FaSquareXTwitter className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-400 dark:group-hover:text-blue-300" />
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-400 dark:group-hover:text-blue-300">
                Follow on X
              </span>
            </motion.a>

            <motion.a
              href={user_info.socials.instagram}
              className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <FaInstagram className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-pink-500 dark:group-hover:text-pink-400" />
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-pink-500 dark:group-hover:text-pink-400">
                Follow on Instagram
              </span>
            </motion.a>
          </motion.div>
        </div>

        <Fade>
          <hr className="border dark:border-zinc-800" />

          <a
            href={`mailto:${user_info.main.email}`}
            className="flex justify-center mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
          >
            <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
            <span>{user_info.main.email}</span>
          </a>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
