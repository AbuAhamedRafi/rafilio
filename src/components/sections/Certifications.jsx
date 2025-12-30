import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PiCertificateLight } from "react-icons/pi";
import user_info from "../../data/user_info";
import Fade from "../Fade.jsx";

function Certifications() {
  const certificates = user_info.certificates;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (certificates.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <section
      id="certificates"
      className="scroll-mt-16 flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 bg-gradient-to-r"
    >
      <Fade>
        <div className="flex flex-col items-center gap-2 mb-8 w-full">
          <PiCertificateLight className="text-6xl text-red-800 dark:text-red-500 animate-spin-slow" />
          <h4 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
            Certificates & Achievements
          </h4>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
            Here are some of the certifications and milestones I have achieved.
          </p>
        </div>
      </Fade>

      <div className="relative w-full max-w-5xl overflow-hidden rounded-xl shadow-lg">
        <div className="relative flex items-center justify-center w-full h-80 sm:h-96 bg-white dark:bg-zinc-950 transition-transform duration-900">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-1000 transform ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-90 z-0"
              }`}
            >
              <h5 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {cert.title}
              </h5>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-6 sm:px-10">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-red-800 dark:bg-red-800/30 dark:text-red-500 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                <FiExternalLink className="text-lg" />
                <span>View Certificate</span>
              </a>
            </div>
          ))}
        </div>

        {certificates.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + certificates.length) % certificates.length
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-red-800 dark:bg-red-800/30 text-white shadow-lg hover:bg-red-600 z-20 transition-all"
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % certificates.length
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-red-800 dark:bg-red-800/30 text-white shadow-lg hover:bg-red-600 z-20 transition-all"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      <div className="flex space-x-3 mt-6">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index
                ? "bg-red-800 dark:bg-red-800/30 scale-150 shadow-md"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
