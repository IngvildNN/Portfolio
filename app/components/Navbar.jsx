import { NavLink } from "@remix-run/react";

function Navbar() {
  return (
    <div className="items-center justify-between max-w-[100vw] flex bg-primary text-secondary h-[10vh]">
      <div className="mx-10 md:mx-44 xl:mx-72 w-full flex justify-between items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-xl md:text-2xl ${isActive ? "underline" : ""}`
          }
        >
          om meg
        </NavLink>
        <NavLink to="/">
          <img src="/public/logo.png" alt="logo" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-xl md:text-2xl ${isActive ? "underline" : ""}`
          }
        >
          ta kontakt
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
