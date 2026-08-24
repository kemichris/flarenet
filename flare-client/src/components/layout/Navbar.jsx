import { Link } from "react-router-dom";
import { useState } from "react";

import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { Button } from "../common/Button";
// import { MobileMenu } from "./MobileMenu";

import Logo from "../../assets/flare-logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center py-2 px-4 justify-between bg-white fixed w-full top-0">
        <img src={Logo} alt="Logo" className="w-30 h-auto" />

        {/* Desktop Navigation */}
        <ul className="flex gap-8 ">
          <li>
            <Link className="hover:text-primary " to="/">Home</Link>
          </li>

          <li>
            <Link className="hover:text-primary transition-all" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-primary transition-all" to="/yield">Earn Yield</Link>
          </li>
        </ul>

        <Button text="Connect" to="/claim" />

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-text lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiOutlineXMark size={24} />
          ) : (
            <HiOutlineBars3 size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* <MobileMenu open={menuOpen} onClose={closeMenu} /> */}
    </>
  );
}
