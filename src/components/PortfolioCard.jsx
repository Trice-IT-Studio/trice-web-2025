"use client";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PortfolioCard = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="w-[300px]">
      {/* Card */}
      <div className="w-[300px] h-[200px] overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Zoom>
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </Zoom>
      </div>

      {/* Text */}
      <p className="font-semibold mt-2">{title}</p>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
};

export default PortfolioCard;
