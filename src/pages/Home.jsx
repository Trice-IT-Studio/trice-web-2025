import ReviewCard from "../components/ReviewCard";
import ReviewCarousel from "../components/ReviewCarousel";
import ServicesCarousel from "../components/Services";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="w-full flex flex-col lg:flex-row items-center justify-center pt-10 lg:pt-32 bg-white dark:bg-gray-800"
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">
                We Build Websites
                <br />
                <span className="text-primary">That Work</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                Custom web solutions tailored to your business goals — built
                with performance, scalability, and style.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                <button className="relative inline-block px-6 py-3 font-medium text-white bg-primary transition duration-200 ease-out group">
                  <span className="absolute inset-0 border-2 border-primary -translate-x-1 translate-y-1 transition duration-200 ease-out transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  Lets Talk
                </button>
                <a
                  href="#"
                  className="text-base sm:text-lg font-medium hover:underline"
                >
                  View our Works!
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="src/assets/hero1.png"
                alt="foto profile"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="w-full flex flex-col items-center justify-center py-20 lg:py-40 bg-white dark:bg-gray-800"
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="src/assets/attribute3.png"
                alt="services"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full mx-auto"
              />
            </div>

            {/* Text + Carousel */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
                Our <span className="text-primary">Services</span>
              </h2>
              <ServicesCarousel />
            </div>
          </div>
        </div>
      </section>

      <section
        id="client"
        className="w-full flex flex-col items-center justify-center py-14 lg:py-16 bg-secondary dark:bg-gray-900"
      >
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white mb-10">
            What Our Clients Say
          </h2>
          <div className="w-full mx-auto flex justify-center">
            <ReviewCarousel
              slides={[
                {
                  review:
                    "Great experience, the team was responsive and professional.",
                  name: "Sarah Johnson",
                  date: "July 2025",
                  rating: 5,
                  avatar: "https://i.pravatar.cc/100?img=1",
                },
                {
                  review: "Website came out clean and fast. Highly recommend.",
                  name: "Michael Liu",
                  date: "June 2025",
                  rating: 4,
                  avatar: "https://i.pravatar.cc/100?img=2",
                },
                {
                  review: "Amazing design and top performance!",
                  name: "Anna Bell",
                  date: "May 2025",
                  rating: 5,
                  avatar: "https://i.pravatar.cc/100?img=3",
                },
                {
                  review:
                    "Great experience, the team was responsive and professional.",
                  name: "Sarah Johnson",
                  date: "July 2025",
                  rating: 5,
                  avatar: "https://i.pravatar.cc/100?img=1",
                },
                {
                  review: "Website came out clean and fast. Highly recommend.",
                  name: "Michael Liu",
                  date: "June 2025",
                  rating: 4,
                  avatar: "https://i.pravatar.cc/100?img=2",
                },
                {
                  review: "Amazing design and top performance!",
                  name: "Anna Bell",
                  date: "May 2025",
                  rating: 5,
                  avatar: "https://i.pravatar.cc/100?img=3",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
