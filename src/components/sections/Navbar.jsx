import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

function Navbar({ switchTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative w-full px-6 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="rounded-4xl hover:shadow-xl transform transition-all duration-300 hover:scale-110"
            src="/favicon.png"
            alt="App Icon"
          />
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
            className="text-zinc-700 dark:text-white hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            ☰
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

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-100 dark:bg-zinc-900 shadow-lg z-10">
          <nav className="flex flex-col gap-4 p-6">
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

          <div className="p-6">
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
    </div>
  );
}

export default Navbar;
