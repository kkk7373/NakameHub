import Logo from "./Logo";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "../modules/langSlice";
import { useState } from "react";

const Header = () => {
  const langState = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { url: "#events", text: "Events" },
    { url: "#login", text: "Login" },
    { url: "https://example.com/register", text: "Register" },
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-content">
          <Logo />

          <nav className="desktop-nav">
            <Menu items={menuItems} />

            <div className="language-toggle-container">
              <span className="language-label">EN</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={langState === "Jap"}
                  onChange={() => dispatch(toggleLanguage())}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="language-label">JP</span>
            </div>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            <Menu items={menuItems} className="mobile-menu" />

            <div className="mobile-language-toggle">
              <span className="language-label">EN</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={langState === "Jap"}
                  onChange={() => dispatch(toggleLanguage())}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="language-label">JP</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
