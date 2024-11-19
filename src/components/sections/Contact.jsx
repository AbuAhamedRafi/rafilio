import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="flex justify-center items-center h-80 px-4">
  <div className="space-y-10">
    {/* =========== FACEBOOK =========== */}
    <a
      href={user_info.socials.facebook}
      className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
    >
      <FaFacebook className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
      <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        Follow on Facebook
      </span>
    </a>

    {/* =========== X (Twitter) =========== */}
    <a
      href={user_info.socials.twitter}
      className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
    >
      <FaSquareXTwitter className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-400 dark:group-hover:text-blue-300" />
      <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-400 dark:group-hover:text-blue-300">
        Follow on X
      </span>
    </a>

    {/* =========== INSTAGRAM =========== */}
    <a
      href={user_info.socials.instagram}
      className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
    >
      <FaInstagram className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-pink-500 dark:group-hover:text-pink-400" />
      <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-pink-500 dark:group-hover:text-pink-400">
        Follow on Instagram
      </span>
    </a>

    {/* =========== LINKEDIN =========== */}
    <a
      href={user_info.socials.linkedin}
      className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 transition-all duration-300 group"
    >
      <FaLinkedin className="text-2xl text-red-800 dark:text-red-500 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-600" />
      <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-700 dark:group-hover:text-blue-600">
        Follow on Linkedin
      </span>
    </a>
  </div>
</div>



      <hr className="border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex justify-center mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;
