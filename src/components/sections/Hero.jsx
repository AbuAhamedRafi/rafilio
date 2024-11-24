import user_info from "../../data/user_info.js";

function Hero() {
  return (
    <>
      <section id="hero" className="md:min-h-screen flex px-6 lg:px-24">
        <div className="self-center w-full">
          <div className="w-full text-zinc-900 dark:text-zinc-100 px-4 sm:px-6 flex flex-col md:grid md:grid-cols-3 items-center gap-10">
            <div className="md:col-span-1 order-1 md:order-2 flex justify-center w-1/2 md:w-full mt-10 md:mt-0">
              <img
                className="rounded-3xl transform rotate-3 w-full max-w-sm md:max-w-full"
                src={user_info.main.photo}
                alt="Rafi Picture"
              />
            </div>

            <div className="md:col-span-2 order-2 md:order-1 text-center md:text-left transition-transform duration-500 hover:scale-105">
              <div>
                <h1
                  className="font-black mt-3 text-4xl sm:text-5xl md:text-6xl max-w-full"
                >
                  {user_info.main.name}
                </h1>
                <h2 className="md:text-xl text-lg mt-2">
                  {user_info.main.role}
                </h2>
                <p className="mt-4 sm:mt-6 dark:text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-7">
                  {user_info.main.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
