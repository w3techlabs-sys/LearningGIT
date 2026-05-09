import "./ClientCard.css";

const ClientCard = ({ logo, link, name, delay }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="client-card fade-up"
      style={{ animationDelay: `${delay}s` }}
      aria-label={name}
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="client-card__logo"
      />
    </a>
  );
};

export default ClientCard;