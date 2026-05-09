import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/W3Techlogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamic height adjustment
  useEffect(() => {
    const updateBodyPadding = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        document.body.style.paddingTop = `${height}px`;
      }
    };

    updateBodyPadding(); // run on load

    window.addEventListener("resize", updateBodyPadding);

    return () => window.removeEventListener("resize", updateBodyPadding);
  }, []);

  const navLinks = [
    "Home",
    "Services",
    "About Us",
    "Contact Us",
    "Our Clients",
  ];

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg fixed-top w3-navbar ${
        scrolled ? "w3-navbar--scrolled" : ""
      }`}
    >
      <div className="container-xxl px-4">
        <img className="W3Tech-logo" src={logo} alt="W3Techlogo" />

        <a className="navbar-brand w3-brand" href="#home">
          <span className="w3-brand__name">W3TechLabs</span>
          <span className="w3-brand__sub">Global Business</span>
        </a>

        <button
          className={`navbar-toggler w3-toggler ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span className="w3-toggler__bar"></span>
          <span className="w3-toggler__bar"></span>
          <span className="w3-toggler__bar"></span>
        </button>

        <div
          className={`collapse navbar-collapse w3-menu ${
            menuOpen ? "show w3-menu--open" : ""
          }`}
        >
          <ul className="navbar-nav mx-auto gap-lg-1">
            {navLinks.map((link) => (
              <li key={link} className="nav-item">
                <a
                  className="nav-link w3-nav-link"
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a href="#contact-us" className="btn w3-btn-cta">
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;