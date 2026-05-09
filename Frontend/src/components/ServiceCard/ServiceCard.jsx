import "./ServiceCard.css";

const ServiceCard = ({
  title,
  description,
  image,
  icon,
  points,
  buttonText,
}) => {
  return (
    <div className="service-card">

      {/* image */}
      <div className="service-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="service-card__image"
        />
      </div>

      {/* floating icon */}
      <div className="service-card__icon">
        {icon}
      </div>

      {/* body */}
      <div className="service-card__body">
        <h3>{title}</h3>

        <p>{description}</p>

        <ul>
          {points.map((point, index) => (
            <li key={index}>✓ {point}</li>
          ))}
        </ul>
      </div>

      {/* footer */}
      <button className="service-card__btn">
        {buttonText}
      </button>

    </div>
  );
};

export default ServiceCard;