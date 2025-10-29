import { Helmet } from "react-helmet-async";
import { useTheme } from "../hooks/useTheme";

import Navbar from "../components/sections/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Experience from "../components/sections/Experience.jsx";
import Education from "../components/sections/Education.jsx";
import Skills from "../components/sections/Skills.jsx";
import Certifications from "../components/sections/Certifications.jsx";
import Resume from "../components/sections/Resume.jsx";

function Homepage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Abu Ahamed Rafi</title>
        <meta name="description" content="Explore the portfolio of Abu Ahamed Rafi, a skilled software engineer specializing in backend development with Laravel and React. View projects, experience, and skills." />
      </Helmet>

      <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen overflow-x-hidden">
        <div className="w-full bg-white dark:bg-zinc-950">
          <Navbar toggleTheme={toggleTheme} />
          <main className="pt-20">
            <Hero />
            <Projects />
            <Education />
            <Experience />
            <Skills />
            <Certifications />
            <Resume />
            <Contact />
            <Footer theme={theme} />
          </main>
        </div>
      </div>
    </>
  );
}

export default Homepage;
