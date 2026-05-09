import { useEffect, useRef } from "react";

/**
 * Hero Component
 * - Full-viewport dark gradient with grid + glow
 * - Left: badge, heading, stats, CTA buttons
 * - Right: Bootstrap 5 Carousel with overlay cards
 * - Subtle parallax on mouse move
 * - Fade-in on load animation
 */
const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  /* ── Parallax: move glow orb with mouse ── */
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 40;
      const y = ((e.clientY - top) / height - 0.5) * 40;
      glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ── Bootstrap Carousel init via CDN ── */
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const carouselEl = document.getElementById("heroCarousel");
      if (carouselEl) new window.bootstrap.Carousel(carouselEl, { interval: 3500, ride: "carousel" });
    }
  }, []);

  const slides = [
    {
      gradient: "linear-gradient(135deg, #1a0533 0%, #0d1b4b 50%, #0a2a1a 100%)",
      icon: "🚀",
      tag: "Cloud Solutions",
      title: "Scalable Infrastructure",
      desc: "Deploy anywhere, scale instantly with our cutting-edge cloud architecture.",
      badge: "99.99% Uptime",
      metric: "10× Faster",
    },
    {
      gradient: "linear-gradient(135deg, #0d1b4b 0%, #1a0533 50%, #1a2a0a 100%)",
      icon: "🤖",
      tag: "AI & Machine Learning",
      title: "Intelligent Automation",
      desc: "Harness the power of AI to automate workflows and unlock insights.",
      badge: "AI-Powered",
      metric: "3× ROI",
    },
    {
      gradient: "linear-gradient(135deg, #0a2a1a 0%, #0d1b4b 50%, #1a0533 100%)",
      icon: "🔐",
      tag: "Cybersecurity",
      title: "Enterprise Security",
      desc: "Fort-level security protecting your data around the clock.",
      badge: "SOC 2 Certified",
      metric: "Zero Breaches",
    },
  ];

  return (
    <section className="w3-hero" id="home" ref={heroRef}>
      {/* ── Background effects ── */}
      <div className="w3-hero__grid" aria-hidden="true" />
      <div className="w3-hero__glow" ref={glowRef} aria-hidden="true" />
      <div className="w3-hero__orb w3-hero__orb--1" aria-hidden="true" />
      <div className="w3-hero__orb w3-hero__orb--2" aria-hidden="true" />

      <div className="container-xxl px-4 h-100">
        <div className="row align-items-center h-100 g-4 g-lg-0">

          {/* ══════════════ LEFT CONTENT ══════════════ */}
          <div className="col-12 col-lg-6 w3-hero__content">

            {/* Badge */}
            <div className="w3-badge fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="w3-badge__dot" />
              #01 Agency Worldwide
            </div>

            {/* Heading */}
            <h1 className="w3-hero__heading fade-in" style={{ animationDelay: "0.25s" }}>
              IT Startup &amp;<br />
              <span className="w3-hero__heading--accent">Digital Agency.</span>
            </h1>

            {/* Description */}
            <p className="w3-hero__desc fade-in" style={{ animationDelay: "0.4s" }}>
              We craft next-generation digital experiences — from cloud infrastructure
              to AI-driven products — that move businesses forward.
            </p>

            {/* Stats */}
            <div className="w3-stats fade-in" style={{ animationDelay: "0.55s" }}>
              <div className="w3-stat">
                <span className="w3-stat__value">100+</span>
                <span className="w3-stat__label">Happy Clients</span>
              </div>
              <div className="w3-stat__divider" />
              <div className="w3-stat">
                <span className="w3-stat__value">24/7</span>
                <span className="w3-stat__label">Support</span>
              </div>
              <div className="w3-stat__divider" />
              <div className="w3-stat">
                <span className="w3-stat__value">50+</span>
                <span className="w3-stat__label">Projects</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w3-hero__ctas fade-in" style={{ animationDelay: "0.7s" }}>
              <a href="#projects" className="btn w3-btn-primary">
                <span>Our Projects</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#quote" className="btn w3-btn-secondary">
                <span>Get a Quote</span>
              </a>
            </div>

            {/* Trust logos */}
            <div className="w3-trust fade-in" style={{ animationDelay: "0.85s" }}>
              <span className="w3-trust__label">Trusted by:</span>
              {["AWS", "Google", "Microsoft", "Vercel"].map((b) => (
                <span className="w3-trust__logo" key={b}>{b}</span>
              ))}
            </div>
          </div>

          {/* ══════════════ RIGHT CAROUSEL ══════════════ */}
          <div className="col-12 col-lg-6 w3-hero__carousel-col fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w3-carousel-wrapper">

              {/* Floating UI chips */}
              <div className="w3-float w3-float--top-left">
                <span className="w3-float__dot w3-float__dot--green" />
                System Online
              </div>
              <div className="w3-float w3-float--bottom-right">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Performance: 98/100
              </div>

              {/* Bootstrap Carousel */}
              <div
                id="heroCarousel"
                className="carousel slide w3-carousel"
                data-bs-ride="carousel"
                data-bs-interval="3500"
              >
                {/* Indicators */}
                <div className="carousel-indicators w3-carousel__indicators">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#heroCarousel"
                      data-bs-slide-to={i}
                      className={i === 0 ? "active" : ""}
                      aria-label={`Slide ${i + 1}`}
                      aria-current={i === 0 ? "true" : undefined}
                    />
                  ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner w3-carousel__inner">
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      className={`carousel-item w3-carousel__item ${i === 0 ? "active" : ""}`}
                    >
                      {/* Slide card */}
                      <div
                        className="w3-slide-card"
                        style={{ background: slide.gradient }}
                      >
                        {/* Tag */}
                        <div className="w3-slide__tag">{slide.tag}</div>

                        {/* Icon area */}
                        <div className="w3-slide__icon-wrap">
                          <span className="w3-slide__icon">{slide.icon}</span>
                          <div className="w3-slide__icon-ring" />
                        </div>

                        {/* Text */}
                        <h3 className="w3-slide__title">{slide.title}</h3>
                        <p className="w3-slide__desc">{slide.desc}</p>

                        {/* Metric chip */}
                        <div className="w3-slide__metrics">
                          <div className="w3-slide__metric">
                            <span className="w3-slide__metric-val">{slide.metric}</span>
                            <span className="w3-slide__metric-label">Performance</span>
                          </div>
                          <div className="w3-slide__badge">{slide.badge}</div>
                        </div>

                        {/* Mini graph decoration */}
                        <div className="w3-slide__graph" aria-hidden="true">
                          {[40, 65, 45, 80, 60, 90, 75].map((h, j) => (
                            <div
                              key={j}
                              className="w3-slide__bar"
                              style={{ height: `${h}%`, animationDelay: `${j * 0.08}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev w3-carousel__ctrl w3-carousel__ctrl--prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next w3-carousel__ctrl w3-carousel__ctrl--next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
