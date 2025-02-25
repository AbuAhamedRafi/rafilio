import user_info from "../../data/user_info.js";
import { MdOutlineWorkOutline } from "react-icons/md";

function Experience() {
  return (
    // <section
    //   id="experience"
    //   className="scroll-mt-16 flex flex-col items-center text-center py-16 px-6 bg-gradient-to-r"
    // >
    //   <div className="w-full">
    //     <div className="flex justify-center items-center mb-8">
    //       <h4 className="text-4xl dark:text-white font-extrabold flex gap-2 items-center">
    //         <MdOutlineWorkOutline className="text-5xl text-red-800 dark:text-red-500" />
    //         Experience
    //       </h4>
    //     </div>

    //     <div className="relative">
    //       <div className="absolute top-0 left-1/2 w-1 bg-gray-300 dark:bg-zinc-700 h-full transform -translate-x-1/2"></div>

    //       {user_info.experience.map((exp, index) => (
    //         <div
    //           key={index}
    //           className={`relative flex flex-col items-start lg:items-center mb-12 ${
    //             index % 2 === 0
    //               ? "lg:flex-row-reverse lg:text-right"
    //               : "lg:flex-row"
    //           }`}
    //         >
    //           <div
    //             className={`absolute w-6 h-6 bg-red-800 dark:bg-red-500 rounded-full transform -translate-x-1/2 top-0 left-1/2`}
    //           >
    //             <div className="w-3 h-3 bg-white dark:bg-zinc-100 rounded-full m-auto mt-1.5"></div>
    //           </div>

    //           <div
    //             className={`w-full lg:w-[45%] px-8 py-6 rounded-xl shadow-xl bg-white dark:bg-zinc-800 ${
    //               index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
    //             }`}
    //           >
    //             <div className="flex items-center gap-4 mb-4">
    //               <img
    //                 className="w-14 h-14 flex-none rounded-full bg-gray-50 dark:bg-zinc-800 border-2 border-gray-300 dark:border-zinc-600"
    //                 src={exp.image}
    //                 alt="Company Logo"
    //               />
    //               <div>
    //                 <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
    //                   {exp.company}
    //                 </h3>
    //                 <p className="text-sm text-zinc-600 dark:text-zinc-400">
    //                   {exp.position}
    //                 </p>
    //                 <p className="text-sm text-zinc-500 dark:text-zinc-400">
    //                   {exp.duration}
    //                 </p>
    //               </div>
    //             </div>

    //             <ul className="list-disc list-inside text-sm text-zinc-800 dark:text-zinc-400 space-y-2">
    //               {exp.descriptions.map((desc, idx) => (
    //                 <li key={idx} className="flex items-start gap-x-2">
    //                   <span className="text-red-800 dark:text-red-500">#</span>
    //                   <span>{desc}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section
      id="experience"
      className="scroll-mt-16 flex flex-col items-center text-center py-16 px-6 bg-gradient-to-r"
    >
      <div className="w-full">
        <div className="flex justify-center items-center mb-12">
          <h4 className="text-4xl dark:text-white font-extrabold flex gap-2 items-center">
            <MdOutlineWorkOutline className="text-5xl text-red-800 dark:text-red-500" />
            Experience
          </h4>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-1 bg-gray-300 dark:bg-zinc-700 h-full transform -translate-x-1/2"></div>

          {user_info.experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center lg:items-start mb-12 lg:flex-row ${
                  isEven ? "lg:flex-row-reverse lg:text-right" : "lg:text-left"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute w-6 h-6 bg-red-800 dark:bg-red-800/70 rounded-full top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white dark:bg-zinc-100 rounded-full"></div>
                </div>

                {/* Experience Card */}
                <div
                  className={`w-full lg:w-[45%] px-8 py-6 rounded-xl shadow-lg bg-white dark:bg-zinc-800 transition-transform duration-300 hover:scale-105 ${
                    isEven ? "lg:mr-12" : "lg:ml-12"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      className="w-14 h-14 flex-none rounded-full border-2 border-gray-300 dark:border-zinc-600"
                      src={exp.image}
                      alt={`${exp.company} Logo`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {exp.position}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-sm text-zinc-800 dark:text-zinc-400 space-y-2">
                    {exp.descriptions.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-x-2">
                        <span className="text-red-800 dark:text-red-500">#</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
