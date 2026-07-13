import PortfolioCard from "../components/PortfolioCard";

const projects = [
  {
    category: "Website",
    items: [
      {
        imgSrc: "/companyP.png",
        title: "Dultra Company Profile",
        subtitle: "Company Profile",
        description: "EDIT: Tambahkan deskripsi singkat proyek ini",
        techStack: ["EDIT: React", "EDIT: Tailwind"],
        liveLink: "https://example.com",
      },
      {
        imgSrc: "/SMK-Perwira-Jakarta.png",
        title: "SMK Perwira Jakarta",
        subtitle: "School Profile",
        description: "EDIT: Tambahkan deskripsi singkat proyek ini",
        techStack: ["EDIT: Tech stack"],
        liveLink: "https://example.com",
      },
      {
        imgSrc: "/BEPRO-SFX.png",
        title: "BEPRO SFX",
        subtitle: "Landing Page",
        description: "EDIT: Tambahkan deskripsi singkat proyek ini",
        techStack: ["EDIT: Tech stack"],
        liveLink: "https://example.com",
      },
    ],
  },
  {
    category: "Desktop App",
    items: [
      {
        imgSrc: "/erapor.png",
        title: "E-Rapor SMK",
        subtitle: "Desktop App",
        description: "EDIT: Tambahkan deskripsi singkat proyek ini",
        techStack: ["EDIT: Tech stack"],
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div>
      <section
        id="portfolio"
        className="w-full flex flex-col items-center justify-center pt-5 lg:pt-10 pb-20 bg-white dark:bg-gray-800"
      >
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-center">
            Latest Projects
          </h2>
        </div>

        <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto space-y-16">
          {projects.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-bold text-primary mb-8">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, i) => (
                  <PortfolioCard key={i} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
