const About = () => {
  return (
    <div>
      {/* team */}
      <div className="w-full relative py-16 bg-white dark:bg-gray-800 py-32">
        {/* Background Lines */}
        <div className="absolute top-10 right-0 z-0 w-full h-full pointer-events-none">
          <img
            src="src/assets/lines1.png"
            alt="lines background"
            className="absolute right-0 top-0 object-contain opacity-70"
          />
        </div>

        {/* Content */}
        <div className="w-full max-w-full px-4 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="src/assets/about1.png"
                alt="about1"
                className="w-full sm:max-w-md mx-auto relative z-10"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white">
                Meet Our People
                <br />
                Behind <span className="text-primary">{`<Trice/>`}</span>
              </h1>
              <p className="mt-4 text-base sm:text-md lg:text-xl text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                {`Meet the minds behind <Trice /> — a crew of builders, thinkers,
                and tinkerers crafting sleek, scalable web solutions with
                purpose and passion.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mission */}
      <div className="w-full relative py-16 bg-white dark:bg-gray-800 pb-32">
        {/* Background Lines */}
        <div className="absolute top-0 right-0 z-0 w-full h-full pointer-events-none">
          <img
            src="src/assets/lines1.png"
            alt="lines background"
            className="absolute left-0 top-0 object-contain opacity-70 scale-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-11/12 max-w-full px-4 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white">
                Our <span className="text-primary">Mission</span>
              </h1>
              <p className="mt-4 text-base sm:text-md lg:text-xl text-gray-700 dark:text-gray-300 mx-auto lg:mx-">
                Empowering businesses through thoughtful, scalable, and
                beautifully engineered web solutions.At Trice, we believe every
                line of code should serve a purpose to solve problems, spark
                growth, and shape impactful experiences for users and clients
                alike.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="src/assets/about2.png"
                alt="about1"
                className="w- mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
