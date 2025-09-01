import React from "react";
import * as LucideIcons from "lucide-react";

const ServiceCard = ({
  icon,
  title,
  description,
  features = [],
  className = "",
  hoverColor = "teal-500",
}) => {
  // Function to render icon based on type
  const renderIcon = () => {
    if (typeof icon === "string") {
      // Try to get the icon component from Lucide
      const IconComponent = LucideIcons[icon];
      if (IconComponent) {
        return <IconComponent className="w-10 h-10" />;
      }
      // Fallback to displaying the string if icon not found
      return <span className="text-2xl">{icon}</span>;
    }
    // If icon is already a React component
    return icon;
  };

  return (
    <div
      className={`group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg
      border border-gray-100 dark:border-gray-700
       relative overflow-hidden ${className}`}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-teal-400
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />

      {/* Icon */}
      <div
        className="rounded-2xl
        flex items-center text-primary mb-3"
      >
        {renderIcon()}
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-bold text-gray-900 dark:text-white mb-4
        group-hover:text-${hoverColor} dark:group-hover:text-${
          hoverColor.split("-")[0]
        }-400
        transition-colors duration-300`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Decorative element */}
      <div
        className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br
        from-${hoverColor.split("-")[0]}-100 to-${hoverColor.split("-")[0]}-200
        dark:from-${hoverColor.split("-")[0]}-900 dark:to-${
          hoverColor.split("-")[0]
        }-800
        rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}
      />
    </div>
  );
};

// Reusable Check Icon Component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default ServiceCard;
