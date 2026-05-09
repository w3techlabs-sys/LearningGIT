// src/components/contact/ContactForm.jsx
import "./ContactForm.css";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = ({ title, subtitle }) => {
  return (
    <div className="contact-form-box">

      <span className="contact-mini-title">• CONTACT US</span>

      <h2>{title}</h2>

      <p>{subtitle}</p>

      <form className="contact-form">
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="col-md-6">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="col-md-6">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="col-md-6">
            <input type="text" placeholder="Phone" />
          </div>

          <div className="col-12">
            <textarea rows="6" placeholder="Write your message"></textarea>
          </div>
        </div>

        <button className="contact-btn">
          Send Message
          <span>
            <FaArrowRight />
          </span>
        </button>
      </form>

    </div>
  );
};

export default ContactForm;