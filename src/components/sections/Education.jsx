import user_info from "../../data/user_info.js";
import { GiGraduateCap } from "react-icons/gi";

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 flex flex-col items-center text-center py-16 px-6 bg-gradient-to-r"
    >
      <div className="w-full">
        <div className="flex justify-center items-center">
          <h4 className="text-4xl dark:text-white mb-4 font-extrabold flex gap-2 items-center">
            <GiGraduateCap className="text-5xl text-red-800 dark:text-red-500" />
            Education
          </h4>
        </div>

        {user_info.education.map((edu, index) => {
          return (
            <div
              key={index}
              className="shadow-lg rounded-xl p-4 mb-4 mx-auto transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-zinc-300 dark:border-zinc-600"
                    src={edu.image}
                    alt="School Logo"
                  />
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                    {edu.school}
                  </h3>
                </div>

                <div className="text-center md:w-1/3">
                  <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                    {edu.degree}
                  </p>
                </div>

                <div className="text-right md:w-1/3">
                  <p className="text-lg uppercase text-zinc-500 dark:text-zinc-400">
                    {edu.duration}
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
