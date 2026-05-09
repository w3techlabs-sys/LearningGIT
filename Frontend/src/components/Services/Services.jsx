import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import servicesData from "../../data/servicesData";

const Services = () => {
  return (
    <section className="services-section"  id="services">
      <div className="container">

        <div className="services-header">
          <span>OUR SERVICES</span>

          <h2>
            Solutions We Provide
          </h2>

          <p>
            We build digital experiences that help brands grow,
            convert, and scale globally.
          </p>
        </div>

        <div className="row g-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-12"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;