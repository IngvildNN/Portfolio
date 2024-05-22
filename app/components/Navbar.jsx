import { NavLink, useLocation } from "@remix-run/react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [hoverStates, setHoverStates] = useState({
    about: false,
    contact: false,
  });

  const handleHover = (key) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className="items-center justify-between max-w-[100vw] flex bg-primary text-secondary h-[10vh]">
      <div className="mx-5 md:mx-44 xl:mx-72 w-full flex justify-between items-center">
        <NavLink
          to="/about"
          className={`hallo text-lg md:text-2xl ${
            hoverStates.about || location.pathname === "/about"
              ? "underline"
              : ""
          } hover:underline`}
          onMouseEnter={() => handleHover("about")}
          onMouseLeave={() => handleMouseLeave("about")}
        >
          <img src="baknav.png" className="absolute" alt="" />
          om meg
        </NavLink>
        <NavLink to="/" className="relative">
          <img
            className="logo absolute z-50 transition-opacity duration-300 hover:opacity-100"
            src="/logo.png"
            alt=""
            onMouseEnter={() => handleHover("logo")}
            onMouseLeave={() => handleMouseLeave("logo")}
          />
          <img
            className={`hov-logo relative z-0 -mt-1 -ml-1 transition-opacity duration-300 transform translate-x-2 translate-y-2 ${
              hoverStates.logo || location.pathname === "/"
                ? "opacity-100"
                : "opacity-0"
            }`}
            src="/public/hov.png"
            alt="logo"
          />
        </NavLink>

        <NavLink
          to="/contact"
          className={`hallo text-lg md:text-2xl ${
            hoverStates.contact || location.pathname === "/contact"
              ? "underline"
              : ""
          } hover:underline`}
          onMouseEnter={() => handleHover("contact")}
          onMouseLeave={() => handleMouseLeave("contact")}
        >
          <img src="baknav.png" className="absolute" alt="" />
          ta kontakt
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
