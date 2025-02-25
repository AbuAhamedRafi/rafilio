import { PiReadCvLogoBold } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import user_info from "../../data/user_info.js";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = user_info.resume.resumeLink;
    link.setAttribute("download", "Abu_Ahamed_Rafi.pdf");
    link.click();
  };

  return (
    <section
      id="resume"
      className="scroll-mt-16 flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r"
    >
      <div className="flex flex-col items-center">
        <h4 className="text-4xl dark:text-white mb-6 font-bold flex gap-3 items-center relative">
          <PiReadCvLogoBold className="text-4xl font-extrabold text-red-800 dark:text-red-500" />
          Resume
        </h4>
      </div>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed">
        {user_info.resume.description}
      </p>
      <button
        onClick={handleDownload}
        aria-label="Download Resume"
        className="inline-flex items-center justify-center gap-x-2 py-3 px-6 hover:scale-105 transition-transform duration-300 rounded-lg font-semibold bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 shadow-md hover:shadow-lg shadow-red-200 dark:shadow-red-800/50"
      >
        <LuDownload className="text-2xl" />
        <span>Download Resume</span>
      </button>
    </section>
  );
}

export default Resume;
