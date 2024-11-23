import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PiCertificateLight } from "react-icons/pi";
import user_info from "../../data/user_info";

function Certificates() {
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
      className="flex flex-col items-center py-8 px-4 "
    >
      <div className="flex justify-center items-center">
          <h4 className="text-4xl dark:text-white mb-4 font-bold flex gap-2 items-center">
            <PiCertificateLight className="text-5xl text-red-800 dark:text-red-500" />
            Certificates and Achivements
          </h4>
        </div>

      <div className="relative w-full max-w-7xl overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-52 sm:h-64 lg:h-80 shadow-lg rounded-md">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <h5 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white text-center px-4">
                {cert.title}
              </h5>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-center mt-2 px-4">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 text-red-800 dark:text-red-500 hover:underline"
              >
                <FiExternalLink className="text-lg" />
                <span>View</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-red-800 dark:bg-red-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
