import user_info from "../../data/user_info.js";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="scroll-mt-16 p-4 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 text-center md:flex justify-between w-full">
      <p className=" text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        {user_info.footer.replace("{year}", new Date().getFullYear())}
      </p>

      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" />{" "}
        Go back to top
      </button>
    </footer>
  );
}

export default Footer;
