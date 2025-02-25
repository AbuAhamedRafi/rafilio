import { AppContext } from "../App.jsx";
import { useContext } from "react";
// import { useLocation } from "react-router-dom";

import Navbar from "../components/sections/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Experience from "../components/sections/Experience.jsx";
import Education from "../components/sections/Education.jsx";
import Skills from "../components/sections/Skills.jsx";
import Certifications from "../components/sections/Certifications.jsx"
import Resume from "../components/sections/Resume.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  // const location = useLocation();

  // useEffect(() => {
  //   window.HSStaticMethods.autoInit();
  // }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <Navbar switchTheme={switchTheme} />
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Resume/>
        <Contact />
        {/* <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" /> */}
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;
