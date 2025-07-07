import ServicesCarousel from "../components/Services";
const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="w-full flex flex-col lg:flex-row items-center justify-center pt-5 lg:pt-32 bg-white dark:bg-gray-800"
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-wrap-reverse">
            <div className="flex-col self-center px-4 lg:w-1/2">
              <h1 className="flex flex-col mt-1 pb-5 text-5xl font-bold dark:text-white lg:text-4xl">
                We Build Websites
                <span className="text-primary">That Work</span>
              </h1>
              <p className="max-w-96 text-xl font-normal dark:text-gray-300">
                Custom web solutions tailored to your business goals — built
                with performance, scalability, and style.
              </p>
              <div className="flex items-center justify-start gap-6 mt-5">
                <button className="relative inline-block px-6 py-3 font-medium text-white bg-primary transition duration-200 ease-out group">
                  <span className="absolute inset-0 border-2 border-primary -translate-x-1 translate-y-1 transition duration-200 ease-out transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  Lets Talk
                </button>
                <a href="#" className="text-xl font-medium hover:underline">
                  View our Works!
                </a>
              </div>
            </div>
            <div className="w-full self-center lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-0 lg:scale-100">
                <img
                  src="src/assets/hero1.png"
                  alt="foto profile"
                  className="relative mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="w-full flex flex-col lg:flex-row items-center justify-center py-32 lg:py-40 bg-white dark:bg-gray-800"
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
            <div className="w-full self-center lg:w-1/2">
              <div className="relative mt-10 lg:left-0 lg:mt-0 lg:scale-100">
                <img
                  src="src/assets/attribute3.png"
                  alt="services"
                  className="relative mx-auto max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-5 self-center px-4  lg:w-1/2">
              <h2 className="mt-1 pb-5 text-4xl font-bold dark:text-white">
                Our <span className="text-primary">Services</span>
              </h2>
              <ServicesCarousel />
              <div className="flex items-center justify-center gap-6 mt-5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
