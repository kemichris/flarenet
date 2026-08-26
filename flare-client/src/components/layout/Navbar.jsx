import { Link } from "react-router-dom";
import { useState } from "react";

import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";

import Logo from "../../assets/flare-logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="flex items-center py-2 px-4 justify-between bg-white fixed w-full top-0 z-50">
        <img src={Logo} alt="Logo" className="w-30 h-auto" />

        {/* Desktop Navigation */}
        <ul className="gap-8 hidden lg:flex">
          <li>
            <Link className="hover:text-primary transition-all" to="/">Home</Link>
          </li>

          <li>
            <Link className="hover:text-primary transition-all" to="/airdrop">FAssets</Link>
          </li>
          <li>
            <Link className="hover:text-primary transition-all" to="/yield">Earn Yield</Link>
          </li>
        </ul>

        <Button text="Connect Wallet" to="/wallets" className='hidden lg:flex'/>

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
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
