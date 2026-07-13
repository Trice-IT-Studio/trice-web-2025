const About = () => {
  return (
    <div>
      {/* team */}
      <div className="w-full relative bg-white dark:bg-gray-800 py-32">
        {/* Background Lines */}
        <div className="absolute top-10 right-0 z-0 w-full h-full pointer-events-none">
          <img
            src="/lines1.png"
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
                src="/about1.png"
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
            src="/lines1.png"
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
                src="/about2.png"
                alt="about1"
                className="w- mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS / STATS — EDIT: ganti angka dengan data real */}
      <section className="w-full py-16 bg-secondary dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">EDIT</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Years Experience
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">EDIT</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Projects Completed
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">EDIT</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Happy Clients
            </p>
          </div>
        </div>
      </section>

      {/* TEAM — EDIT: ganti dengan data tim real */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center dark:text-white mb-12">
            Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Aziz Abdillah", role: "EDIT: Role", img: "" },
              { name: "Rizky Wahyu Kristiawan", role: "EDIT: Role", img: "" },
              { name: "Adhitya Nugraha", role: "EDIT: Role", img: "" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 mb-4 overflow-hidden flex items-center justify-center text-gray-400 text-sm">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "Photo"
                  )}
                </div>
                <h3 className="text-lg font-semibold dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — EDIT: ganti dengan kontak real */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white mb-8">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <p className="font-semibold dark:text-white">Email</p>
              <p className="text-gray-500 text-sm mt-1">
                trice.it.studio@gmail.com
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <p className="font-semibold dark:text-white">Phone / WhatsApp</p>
              <p className="text-gray-500 text-sm mt-1">+62 896-0559-1892</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <p className="font-semibold dark:text-white">Location</p>
              <p className="text-gray-500 text-sm mt-1">
                EDIT: Tambahkan alamat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
