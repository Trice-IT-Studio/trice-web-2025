import ReviewCard from "../components/ReviewCard";
import ReviewCarousel from "../components/ReviewCarousel";
import ServicesCarousel from "../components/Services";

import attribute3 from "../assets/attribute3.png";
import hero1 from "../assets/hero1.png";
import FooterComp from "../components/FooterComp";
import ServiceCard from "../components/ServiceCard";
import { TrendingUp, Search, Smartphone } from "lucide-react";

const Home = () => {
  const whys = [
    {
      title: "Performance",
      description:
        "Optimize your website speed and performance with advanced caching, compression, and code optimization techniques.",
      icon: TrendingUp,
    },
    {
      title: "SEO Friendly",
      description:
        "Boost your search rankings with semantic HTML, meta optimization, and search engine best practices.",
      icon: Search,
    },
    {
      title: "Responsive",
      description:
        "Ensure perfect display across all devices with mobile-first responsive design and adaptive layouts.",
      icon: Smartphone,
    },
  ];

  const ServiceIcon = ({ icon: Icon }) => (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
      <Icon className="w-5 h-5 text-primary" />
    </div>
  );

  return (
    <div className="">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="w-full  flex flex-col lg:flex-row items-center justify-center mt-10 py-10 lg:py-36 bg-white dark:bg-gray-800"
      >
        <div className="w-full max-w-7xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white">
                We Build Websites
                <br />
                <span className="text-primary">That Work</span>
              </h1>
              <p className="mt-4 text-base sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                Custom web solutions tailored to your business goals — built
                with performance, scalability, and style.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-6">
                <button className="relative inline-block px-10 py-5 font-medium text-white text-xl bg-primary transition duration-200 ease-out group hover:-translate-y-1">
                  <span className="absolute inset-0 border-2 border-primary -translate-x-1 translate-y-1"></span>
                  Lets Talk
                </button>
                <button className="relative inline-block px-6 py-3 font-medium text-black text-xl bg-white border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary transition duration-200 ease-out group hover:-translate-y-1">
                  View our Works!
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={hero1}
                alt="foto profile"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="us">
        <div className="mx-auto bg-secondary my-8">
          <div className="w-full max-w-7xl mx-auto px-8 py-16 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              {/* Left Section */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  How we support our partner all over the world
                </h1>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  SaaS becomes a common delivery model for many business
                  applications, including office software, messaging software,
                  payroll processing software, DBMS software, management
                  software
                </p>
              </div>

              {/* Right Section */}
              <div className="space-y-8">
                {whys.map((why, index) => (
                  <div key={index} className="flex gap-4">
                    <ServiceIcon icon={why.icon} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {why.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {why.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="w-full flex flex-col items-center justify-center pt-5 lg:pt-10 pb-20 bg-white dark:bg-gray-800"
      >
        {/* <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            <div className="w-full lg:w-1/2">
              <img
                src={attribute3}
                alt="services"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full mx-auto"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
                Our <span className="text-primary">Services</span>
              </h2>
              <ServicesCarousel />
            </div>
          </div>
        </div> */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-center lg:text-left">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>
        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="Code"
            title="Website Development"
            description="Membangun website custom yang fast, secure, dan SEO-optimized menggunakan teknologi terdepan."
            features={[
              "Responsive design untuk semua device",
              "SEO optimization & fast loading",
              "Modern framework (React, Next.js)",
              "Content Management System",
            ]}
          />
          <ServiceCard
            icon="Globe"
            title="Web Application"
            description="Mengembangkan aplikasi web yang kompleks dan interaktif untuk mengotomatisasi proses bisnis."
            features={[
              "Custom business logic",
              "Real-time data processing",
              "User authentication & security",
              "API integration & development",
            ]}
            iconBgColor="from-blue-400 to-blue-600"
            hoverColor="blue-600"
          />
          <ServiceCard
            icon="Wrench"
            title="Maintenance & Support"
            description="Layanan maintenance 24/7 untuk memastikan website Anda selalu up-to-date dan aman."
            features={[
              "Regular security updates",
              "Performance monitoring",
              "Backup & disaster recovery",
              "Technical support 24/7",
            ]}
            iconBgColor="from-purple-400 to-purple-600"
            hoverColor="purple-600"
          />
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
      <FooterComp />
    </div>
  );
};

export default Home;
