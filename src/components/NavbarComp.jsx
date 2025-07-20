import React from "react";
import "./component.css";
import {
  Navbar,
  MobileNav,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import ToggleDark from "./ToggleDark";

import weblogo from "../assets/weblogo.png";
import weblogodm from "../assets/weblogo(dm).png";

export default function NavbarComp() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-blue-gray-900">
      <li className="group">
        <a
          href={`/`}
          className="mx-8 flex py-2 text-base text-blue-gray-900 group-hover:text-primary dark:text-white"
        >
          Home
        </a>
      </li>
      <li className="group">
        <a
          href={`/about`}
          className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
        >
          About Us
        </a>
      </li>
      <li className="group">
        <a
          href="#portfolio"
          className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
        >
          Portfolio
        </a>
      </li>
      <li className="group">
        <a
          href="#contact"
          className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
        >
          Contact Us
        </a>
      </li>
      <li className="group">
        <ToggleDark />
      </li>
    </ul>
  );

  return (
    <>
      <Navbar
        className={`sticky border-none shadow-none inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 dark:bg-blue-gray-900
    ${!isTop ? "shadow-lg" : ""}`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <img src={weblogo} width="100px" className="dark:hidden" />
          <img src={weblogodm} width="100px" className="hidden dark:flex" />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden dark:text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  );
}
