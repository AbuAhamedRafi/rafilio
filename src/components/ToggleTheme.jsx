import { CgDarkMode } from "react-icons/cg";

function ToggleTheme({ switchTheme }) {
  return (
    <div className="relative flex items-center justify-between w-full px-6 py-8  md:w-auto md:px-6">
      <div className="flex items-center gap-2">
        <img
          className="rounded-4xl hover:shadow-xl transform transition-all duration-300 hover:scale-110
"
          src="/favicon.png"
          alt="App Icon"
        />
      </div>
      
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          onClick={switchTheme}
          className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
          aria-label="Dark Mode Button"
        >
          <CgDarkMode />

          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            Toggle Dark Mode
          </span>
        </button>
      </div>
    </div>
  );
}

export default ToggleTheme;
