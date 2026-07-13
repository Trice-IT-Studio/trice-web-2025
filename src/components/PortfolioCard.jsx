import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PortfolioCard = ({ imgSrc, title, subtitle, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="group">
      <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md cursor-pointer">
        <Zoom zoomMargin={20}>
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </Zoom>
      </div>

      <p className="font-semibold mt-3 text-lg dark:text-white">{title}</p>
      <p className="text-gray-500 text-sm mb-2">{subtitle}</p>

      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
          {description}
        </p>
      )}

      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-secondary dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {(liveLink || githubLink) && (
        <div className="flex gap-4 mt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Live Site
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Source
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
