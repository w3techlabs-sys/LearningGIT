// src/components/contact/Contact.jsx
import "./Contact.css";
import ContactForm from "./ContactForm";
import contactImage from "../../assets/contact.png";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const contactData = {
    title: "Get in Touch",
    subtitle:
      "Let's discuss your next project. Our team is ready to help you build modern digital solutions.",
  };

  return (
    <section className="contact-section"  id="contact-us">
      <div className="container">

        <div className="contact-wrapper">

          {/* Left */}
          <div className="contact-left">
            <ContactForm
              title={contactData.title}
              subtitle={contactData.subtitle}
            />
          </div>

          {/* Right */}
          <div className="contact-right">
            <img src={contactImage} alt="Contact us" />

            <div className="contact-call-box">
              <div className="call-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Call us anytime</span>
                <h4>+92 526 420 009</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;