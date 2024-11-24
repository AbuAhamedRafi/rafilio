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
      className="flex flex-col items-center text-center py-16 px-6"
    >
      <div className="flex justify-center items-center">
          <h4 className="text-4xl dark:text-white mb-4 font-bold flex gap-2 items-center">
            <RxResume className="text-4xl text-red-800 dark:text-red-500" />
            Resume
          </h4>
        </div>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl">
        {user_info.resume.description}
      </p>
      <button
        onClick={handleDownload}
        aria-label="Download Resume"
        className="flex gap-2 hover:gap-3 items-center transition-all duration-300
                text-zinc-700 hover:text-red-800 dark:text-white dark:hover:text-red-500"
      >
        <GrDocumentDownload className="text-2xl text-red-800 dark:text-red-500" />
        <span>Download Resume</span>
      </button>
    </section>
  );
}

export default Resume;
