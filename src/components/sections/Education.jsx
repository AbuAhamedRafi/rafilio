import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="mx-4 lg:mx-20 flex items-center md:gap-2 h-auto py-10"
    >
      <div className="w-full">
        <div className="flex justify-center items-center">
          <h4 className="text-4xl dark:text-white mb-4 font-bold flex gap-2 items-center">
            <FaLandmark className="text-4xl text-red-800 dark:text-red-500" />
            Education
          </h4>
        </div>

        {user_info.education.map((edu, index) => {
          return (
            <div
              key={index}
              className="shadow-lg rounded-xl p-4  mb-4 mx-auto transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-sm font-medium uppercase  text-zinc-500 dark:text-zinc-400 mb-2">
                {edu.duration}
              </h3>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-zinc-300 dark:border-zinc-600"
                    src={edu.image}
                    alt="School Logo"
                  />
                </div>

                <div className="leading-6">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-[1px] bg-zinc-200 dark:bg-zinc-700"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
