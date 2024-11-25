import { RxResume } from "react-icons/rx";
import { GrDocumentDownload } from "react-icons/gr";
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
      className="scroll-mt-16 flex flex-col items-center text-center py-16 px-6 bg-gradient-to-r"
    >
      <div className="flex flex-col items-center">
        <h4 className="text-4xl dark:text-white mb-4 font-extrabold flex gap-2 items-center relative">
          <RxResume className="text-4xl text-red-900" />
          Resume
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1  rounded-md"></span>
        </h4>
      </div>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl leading-relaxed">
        {user_info.resume.description}
      </p>
      <button
        onClick={handleDownload}
        aria-label="Download Resume"
        className="inline-flex items-center justify-between gap-x-2 py-4 px-6 hover:scale-105 transition-transform duration-300 rounded-xl font-medium bg-red-500 text-white shadow-lg shadow-red-200 dark:bg-red-600 dark:shadow-red-800 dark:hover:bg-red-700 animate-bounce"
      >
        <GrDocumentDownload className="text-2xl" />
        <span>Download Resume</span>
      </button>
    </section>
  );
}

export default Resume;
