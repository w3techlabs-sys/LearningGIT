import { useEffect, useRef } from "react";
import "./Hero.css";

const slides = [
  {
    icon: "🚀",
    title: "Scalable Infrastructure",
    desc: "Deploy anywhere and scale instantly.",
    tag: "Cloud Solutions",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Smart products powered by AI.",
    tag: "Artificial Intelligence",
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    desc: "Fortified cybersecurity solutions.",
    tag: "Cybersecurity",
  },
];

const Hero = () => {
  const heroRef = useRef();
  const glowRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;

    const moveGlow = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;

      glow.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };

    hero.addEventListener("mousemove", moveGlow);

    return () => hero.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <section id="home" className="w3-hero" ref={heroRef}>
      <div className="w3-hero__grid"></div>
      <div className="w3-hero__glow" ref={glowRef}></div>

      <div className="container-xxl px-4">
        <div className="row align-items-center min-vh-100 g-5">

          <div className="col-lg-6">
            <span className="w3-badge">#01 Agency Worldwide</span>

            <h1 className="w3-hero__heading">
              IT Startup & <br />
              <span>Digital Agency</span>
            </h1>

            <p className="w3-hero__desc">
              We craft next-generation digital experiences.
            </p>

            <div className="w3-hero__ctas">
              <a href="#projects" className="btn w3-btn-primary">
                Our Projects
              </a>

              <a href="#quote" className="btn w3-btn-secondary">
                Get Quote
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              {slides.map((slide) => (
                <div key={slide.title} className="col-12">
                  <div className="w3-card">
                    <div className="w3-tag">{slide.tag}</div>
                    <div className="w3-icon">{slide.icon}</div>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;