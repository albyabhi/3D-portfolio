import React, { useState } from "react";
import { navLinks } from "../contants/index";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prevIsOpen) => !prevIsOpen);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            className="text-neutral-400 font-bold hover:text-white transition-colors"
          >
            Alby AB
          </a>
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className=" text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />

          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
