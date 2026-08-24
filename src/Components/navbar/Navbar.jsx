
import { useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/navbar.css";
import { downloadResume } from "../../utils/downloadresume";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container">

        {/* Logo */}
        <div className="logo">
          MN
        </div>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Right Side */}
        <div className="nav-actions">

          <a
            onClick={downloadResume}
            className="resume-btn"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="theme-btn"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i
              className={
                menuOpen
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }
            ></i>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

    </header>
  );
}

export default Navbar;