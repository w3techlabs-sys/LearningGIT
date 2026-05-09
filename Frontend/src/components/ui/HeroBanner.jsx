// HeroBanner.jsx

import React, { useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroBanner.css";

// Import Images Later
import slide1 from "../../assets/slide 1.webp";
import slide2 from "../../assets/slide 2.jpg";
import slide3 from "../../assets/slide 3.jpg";

const slides = [
  {
    image: slide1,
    badge: "DIGITAL AGENCY",
    title: "Build Powerful Digital Experiences",
    desc: "We craft high-performance websites, SaaS platforms, and scalable digital solutions for modern businesses.",
    button: "Get Started",
  },
  {
    image: slide2,
    badge: "WEB DEVELOPMENT",
    title: "Creative Solutions For Growing Brands",
    desc: "Transform your online presence with premium UI/UX, development, and conversion-focused experiences.",
    button: "Explore Services",
  },
  {
    image: slide3,
    badge: "TECH SOLUTIONS",
    title: "Modern SaaS & Business Innovation",
    desc: "Helping startups and enterprises scale faster with elegant technology and modern development.",
    button: "Request Quote",
  },
];

const floatingCards = [
  {
    title: "120+ Projects",
    subtitle: "Completed Successfully",
  },
  {
    title: "UI/UX Design",
    subtitle: "Modern Interfaces",
  },
  {
    title: "98% Satisfaction",
    subtitle: "Happy Clients",
  },
  {
    title: "SEO Growth",
    subtitle: "Marketing Boost",
  },
  {
    title: "Web Development",
    subtitle: "Modern Solutions",
  },
  {
    title: "Mobile Apps",
    subtitle: "Android & iOS",
  },
];

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: false,
    });
  }, []);

  return (
    <section className="hero-banner">
      <Carousel
        fade
        controls={true}
        indicators={false}
        interval={4000}
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>

              <div className="container">
                <div className="row align-items-center hero-content-wrapper">
                  
                  {/* LEFT CONTENT */}
                  <div
                    className="col-lg-6 hero-left"
                    data-aos="fade-up"
                  >
                    <span className="hero-badge">
                      {slide.badge}
                    </span>

                    <h1 className="hero-title">
                      {slide.title}
                    </h1>

                    <p className="hero-desc">
                      {slide.desc}
                    </p>

                    <Button className="hero-btn">
                      {slide.button}
                    </Button>
                  </div>

                  {/* RIGHT FLOATING CARDS */}
                  <div
                    className="col-lg-6 hero-right"
                    data-aos="fade-left"
                  >
                    <div className="floating-wrapper">
                      {floatingCards.map((card, i) => (
                        <div
                          className={`floating-card card-${i + 1}`}
                          key={i}
                        >
                          <h4>{card.title}</h4>
                          <p>{card.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroBanner;