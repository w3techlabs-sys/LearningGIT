// src/components/footer/Footer.jsx
import "./Footer.css";
import FooterColumn from "./FooterColumn";
import logo from "../../assets/W3Techlogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "#" },
    { name: "Services", path: "#services" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
  ];

  const exploreLinks = [
    { name: "Blog", path: "#" },
    { name: "Careers", path: "#" },
    { name: "FAQs", path: "#" },
    { name: "Privacy Policy", path: "#" },
  ];

  return (
    <footer className="footer-section">

      {/* CTA Banner */}
      <div className="footer-banner container">
        <div className="footer-banner-content">
          <h2>Recognized as One of the Leading Company!</h2>
          <button>Discover More →</button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container footer-main">
        <div className="row gy-5">

          {/* Company */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-company">
              <img src={logo} alt="logo" className="footer-logo" />

              <p>
                Empowering brands with cutting-edge digital solutions
                to drive growth and innovation.
              </p>

              <div className="footer-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">
            <FooterColumn title="Quick Links" links={quickLinks} />
          </div>

          <div className="col-lg-2 col-md-6">
            <FooterColumn title="Explore" links={exploreLinks} />
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <div className="newsletter-box">
              <h5>Newsletter</h5>

              <p>Subscribe to our newsletter</p>

              <div className="newsletter-input">
                <input type="email" placeholder="Email Address" />
                <button>
                  <FaPaperPlane />
                </button>
              </div>

              <small>
                I agree to your terms and policies
              </small>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© Copyright 2026 — W3TechLabs</p>

        <div>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;