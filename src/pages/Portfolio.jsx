import PortfolioCard from "../components/PortfolioCard";
import companyP from "../assets/companyP.png";
import smkPerwira from "../assets/SMK-Perwira-Jakarta.png";
import beproSfx from "../assets/BEPRO-SFX.png";
import erapor from "../assets/erapor.png";

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
              imgSrc={companyP}
              title="Dultra Company Profile"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc={smkPerwira}
              title="SMK Perwira Jakarta"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc={beproSfx}
              title="BEPRO SFX"
              subtitle="Website"
            />
            <PortfolioCard
              imgSrc={erapor}
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
