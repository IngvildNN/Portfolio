import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="items-center justify-between min-w-[100vw] flex bg-primary text-secondary h-[10vh]">
      <div className="mx-10 md:mx-44 xl:mx-72 w-full flex justify-between items-center">
        <a href="/about" className={pathname === "/about" ? "underline" : ""}>
          om meg
        </a>
        <a href="/">
          <img src="/public/logo.png" alt="logo" />
        </a>
        <a
          href="/contact"
          className={pathname === "/contact" ? "underline" : ""}
        >
          ta kontakt
        </a>
      </div>
    </div>
  );
}
