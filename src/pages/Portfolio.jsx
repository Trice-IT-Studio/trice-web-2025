import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <section
        id="services"
        className="w-full flex flex-col items-center justify-center pt-5 lg:pt-10 pb-20 bg-white dark:bg-gray-800"
      >
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-center lg:text-left">
            Latest Projects
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-xl px-4 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              imgSrc="src/assets/SMK-Perwira-Jakarta.png"
              title="SMK Perwira Jakarta"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc="src/assets/BEPRO-SFX.png"
              title="BEPRO SFX"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc="src/assets/companyP.png"
              title="Dultra Company Profile"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc="src/assets/erapor.png"
              title="E-Rapor SMK"
              subtitle="Desktop App"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
