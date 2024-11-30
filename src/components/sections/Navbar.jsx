import { useState, useEffect, useRef } from "react";
import { CgDarkMode } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Navbar({ switchTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-100/90 dark:bg-zinc-900/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                className="rounded-4xl hover:shadow-xl transform transition-all duration-300 hover:scale-110"
                src="/favicon.png"
                alt="App Icon"
              />
            </a>
          </div>

          <nav className="hidden lg:flex gap-8">
            {[
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "#experience", label: "Experience" },
              { href: "#certificates", label: "Certifications" },
              { href: "#resume", label: "Resume" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex gap-2 hover:gap-3 items-center transition-all duration-300
                text-zinc-700 hover:text-red-800 dark:text-white dark:hover:text-red-500"
              >
                <span className="font-medium">{item.label}</span>
                <IoIosArrowForward />
              </a>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            <button
              className="text-3xl text-zinc-700 dark:text-white hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
              aria-label="Open Menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={switchTheme}
              className="text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-red-500 transition-all duration-300"
              aria-label="Dark Mode Button"
            >
              <CgDarkMode />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden shadow-lg z-10"
        >
          {isMenuOpen && (
            <div className="p-6" ref={menuRef}>
              <nav className="flex flex-col gap-4">
                {[
                  { href: "#projects", label: "Projects" },
                  { href: "#education", label: "Education" },
                  { href: "#experience", label: "Experience" },
                  { href: "#certificates", label: "Certifications" },
                  { href: "#resume", label: "Resume" },
                  { href: "#contact", label: "Contact" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex gap-2 hover:gap-3 items-center transition-all duration-300
                    text-zinc-700 hover:text-red-800 dark:text-white dark:hover:text-red-500"
                  >
                    <span className="font-medium">{item.label}</span>
                    <IoIosArrowForward />
                  </a>
                ))}
              </nav>

              <div className="mt-4">
                <button
                  onClick={switchTheme}
                  className="text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-red-500 transition-all duration-300"
                  aria-label="Dark Mode Button"
                >
                  <CgDarkMode />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
