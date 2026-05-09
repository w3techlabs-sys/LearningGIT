import { useEffect, useRef } from "react";
import "./Clients.css";
import ClientCard from "../ClientCard/ClientCard";

/* logos */
import hsmscrap from "../../assets/hsmscrap.png";
import eatoreum from "../../assets/Eatoreum.png";
import bawa from "../../assets/bawa.png";
import luxebalsam from "../../assets/luxebalsam.png";
import monosoft from "../../assets/monosoft.png";

const Clients = () => {
  const sectionRef = useRef(null);

  /* data source */
  const clients = [
    {
      name: "Hsamscrap",
      logo: hsmscrap,
      link: "https://hsmscrap.co",
    },
    {
      name: "Eatoreum",
      logo: eatoreum,
      link: "https://eatoreum.com",
    },
    {
      name: "Bawa",
      logo: bawa,
      link: "https://bawa-uk.com",
    },
      {
      name: "Luxebalsam",
      logo: luxebalsam,
      link: "https://luxebalsam-properties.com",
    },
       {
      name: "Monosoft",
      logo: monosoft,
      link: "https://digitalaxio.com",
    },
  ];

  /* fade in on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const cards =
          sectionRef.current.querySelectorAll(".fade-up");

        cards.forEach((card) => {
          card.classList.add("show");
        });

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="clients-section"
      id="our-clients"
      ref={sectionRef}
    >
      <div className="container">

        {/* heading */}
        <div className="clients-header">
          <span>TRUSTED BY BRANDS</span>
          <h2>Our Clients</h2>
          <p>
            Trusted worldwide for delivering
            premium digital solutions.
          </p>
        </div>

        {/* logos */}
        <div className="row g-4">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="col-lg-2-4 col-md-4 col-6"
            >
              <ClientCard
                logo={client.logo}
                link={client.link}
                name={client.name}
                delay={index * 0.15}
              />
            </div>
          ))}
        </div>

        {/* button */}
        <div className="clients-btn-wrap">
          <a href="#contact-us" className="clients-btn">
            Contact Us For More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Clients;